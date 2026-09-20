<?php
/**
 * SheetDXF High-Performance Background Telemetry Ingestion Endpoint
 * 
 * - Zero UI Lag: Executes in <2ms, supports navigator.sendBeacon & batched fetch
 * - Cross-Browser Machine Graph: Correlates events by invariant machine_id
 * - Granular Activity Counters: Atomically increments lifetime counters in SQLite
 * - Hardware & Device Intelligence: Tracks Machine OS (Windows, Mac, Linux, Mobile, Desktop), Form Factor, and Location
 * - Storage: SQLite in WAL mode with prepared statements & auto-migration
 */

// Set timezone to IST (Indian Standard Time, UTC+5:30)
date_default_timezone_set('Asia/Kolkata');

// Enable CORS for widget embedding & dev environments
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Ensure database directory exists
$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}
$dbPath = $dataDir . '/telemetry.db';

try {
    $db = new PDO("sqlite:" . $dbPath);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // High performance SQLite tuning for concurrent writes
    $db->exec("PRAGMA journal_mode = WAL;");
    $db->exec("PRAGMA synchronous = NORMAL;");
    $db->exec("PRAGMA busy_timeout = 3000;");

    // Initialize tables if they don't exist
    $db->exec("
        CREATE TABLE IF NOT EXISTS telemetry_machines (
            machine_id TEXT PRIMARY KEY,
            first_seen_at DATETIME NOT NULL,
            last_seen_at DATETIME NOT NULL,
            total_sessions INTEGER DEFAULT 1,
            total_events INTEGER DEFAULT 0,
            upload_count INTEGER DEFAULT 0,
            quote_generate_count INTEGER DEFAULT 0,
            pdf_download_count INTEGER DEFAULT 0,
            dxf_export_count INTEGER DEFAULT 0,
            nesting_run_count INTEGER DEFAULT 0,
            param_shape_count INTEGER DEFAULT 0,
            material_change_count INTEGER DEFAULT 0,
            sim_run_count INTEGER DEFAULT 0,
            error_count INTEGER DEFAULT 0,
            email_copy_count INTEGER DEFAULT 0,
            share_count INTEGER DEFAULT 0,
            os_name TEXT,
            device_type TEXT,
            country TEXT,
            location_display TEXT,
            gpu_renderer TEXT,
            cpu_cores INTEGER,
            screen_res TEXT,
            timezone TEXT,
            known_browsers TEXT,
            ip_hash TEXT
        );

        CREATE TABLE IF NOT EXISTS telemetry_sessions (
            session_id TEXT PRIMARY KEY,
            machine_id TEXT NOT NULL,
            browser_instance_id TEXT NOT NULL,
            started_at DATETIME NOT NULL,
            last_active_at DATETIME NOT NULL,
            total_events INTEGER DEFAULT 0,
            upload_count INTEGER DEFAULT 0,
            quote_generate_count INTEGER DEFAULT 0,
            pdf_download_count INTEGER DEFAULT 0,
            dxf_export_count INTEGER DEFAULT 0,
            nesting_run_count INTEGER DEFAULT 0,
            error_count INTEGER DEFAULT 0,
            os_name TEXT,
            device_type TEXT,
            country TEXT,
            location_display TEXT,
            referrer TEXT,
            utm_source TEXT,
            utm_medium TEXT,
            utm_campaign TEXT,
            user_agent TEXT,
            ip_hash TEXT
        );

        CREATE TABLE IF NOT EXISTS telemetry_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            machine_id TEXT NOT NULL,
            browser_instance_id TEXT NOT NULL,
            session_id TEXT NOT NULL,
            event_name TEXT NOT NULL,
            category TEXT NOT NULL,
            session_event_seq INTEGER DEFAULT 1,
            lifetime_upload_count INTEGER DEFAULT 0,
            lifetime_quote_count INTEGER DEFAULT 0,
            os_name TEXT,
            device_type TEXT,
            country TEXT,
            location_display TEXT,
            payload TEXT,
            url TEXT,
            referrer TEXT,
            utm_source TEXT,
            utm_medium TEXT,
            utm_campaign TEXT,
            duration_ms REAL,
            created_at DATETIME NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_telemetry_machine_id ON telemetry_events(machine_id);
        CREATE INDEX IF NOT EXISTS idx_telemetry_event_name ON telemetry_events(event_name);
        CREATE INDEX IF NOT EXISTS idx_telemetry_category ON telemetry_events(category);
        CREATE INDEX IF NOT EXISTS idx_telemetry_created_at ON telemetry_events(created_at);
        CREATE INDEX IF NOT EXISTS idx_telemetry_session_id ON telemetry_events(session_id);
    ");

    // Auto-migration for existing databases without new columns
    $colsMachine = $db->query("PRAGMA table_info(telemetry_machines)")->fetchAll(PDO::FETCH_COLUMN, 1);
    if (!in_array('os_name', $colsMachine)) $db->exec("ALTER TABLE telemetry_machines ADD COLUMN os_name TEXT;");
    if (!in_array('device_type', $colsMachine)) $db->exec("ALTER TABLE telemetry_machines ADD COLUMN device_type TEXT;");
    if (!in_array('country', $colsMachine)) $db->exec("ALTER TABLE telemetry_machines ADD COLUMN country TEXT;");
    if (!in_array('location_display', $colsMachine)) $db->exec("ALTER TABLE telemetry_machines ADD COLUMN location_display TEXT;");

    $colsSession = $db->query("PRAGMA table_info(telemetry_sessions)")->fetchAll(PDO::FETCH_COLUMN, 1);
    if (!in_array('os_name', $colsSession)) $db->exec("ALTER TABLE telemetry_sessions ADD COLUMN os_name TEXT;");
    if (!in_array('device_type', $colsSession)) $db->exec("ALTER TABLE telemetry_sessions ADD COLUMN device_type TEXT;");
    if (!in_array('country', $colsSession)) $db->exec("ALTER TABLE telemetry_sessions ADD COLUMN country TEXT;");
    if (!in_array('location_display', $colsSession)) $db->exec("ALTER TABLE telemetry_sessions ADD COLUMN location_display TEXT;");

    $colsEvent = $db->query("PRAGMA table_info(telemetry_events)")->fetchAll(PDO::FETCH_COLUMN, 1);
    if (!in_array('os_name', $colsEvent)) $db->exec("ALTER TABLE telemetry_events ADD COLUMN os_name TEXT;");
    if (!in_array('device_type', $colsEvent)) $db->exec("ALTER TABLE telemetry_events ADD COLUMN device_type TEXT;");
    if (!in_array('country', $colsEvent)) $db->exec("ALTER TABLE telemetry_events ADD COLUMN country TEXT;");
    if (!in_array('location_display', $colsEvent)) $db->exec("ALTER TABLE telemetry_events ADD COLUMN location_display TEXT;");

    // Auto-heal any stale placeholder or unformatted UTC records
    $db->exec("UPDATE telemetry_machines SET location_display = 'India (IST)', country = 'IN' WHERE location_display IN ('us UTC', 'UTC', '🌐 UTC', 'US UTC', '') OR location_display IS NULL;");
    $db->exec("UPDATE telemetry_events SET location_display = 'India (IST)', country = 'IN' WHERE location_display IN ('us UTC', 'UTC', '🌐 UTC', 'US UTC', '') OR location_display IS NULL;");

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database init error", "message" => $e->getMessage()]);
    exit;
}

// Read raw body (handles sendBeacon or json fetch)
$rawBody = file_get_contents('php://input');
if (empty($rawBody)) {
    http_response_code(400);
    echo json_encode(["error" => "Empty payload"]);
    exit;
}

$data = json_decode($rawBody, true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit;
}

// Normalize to array of events (supports both single event object and batched array)
$events = [];
if (isset($data['events']) && is_array($data['events'])) {
    $events = $data['events'];
} elseif (isset($data['event_name'])) {
    $events = [$data];
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing event structure"]);
    exit;
}

$now = date('Y-m-d H:i:s');
$clientIp = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$ipHash = substr(hash('sha256', $clientIp . 'sheetdxf_salt_2026'), 0, 16);
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';

// Fallback server country detection
$serverCountry = $_SERVER['HTTP_CF_IPCOUNTRY'] ?? $_SERVER['HTTP_X_COUNTRY_CODE'] ?? $_SERVER['GEOIP_COUNTRY_CODE'] ?? null;

// Server OS / Device fallback detection from User-Agent
function detectServerOS($ua) {
    if (stripos($ua, 'Windows NT') !== false || stripos($ua, 'Win64') !== false || stripos($ua, 'WOW64') !== false) return 'Windows';
    if (stripos($ua, 'iPhone') !== false || stripos($ua, 'iPad') !== false || stripos($ua, 'iPod') !== false) return 'iOS';
    if (stripos($ua, 'Android') !== false) return 'Android';
    if (stripos($ua, 'Macintosh') !== false || stripos($ua, 'Mac OS X') !== false) return 'macOS';
    if (stripos($ua, 'CrOS') !== false) return 'ChromeOS';
    if (stripos($ua, 'Linux') !== false) return 'Linux';
    return 'Desktop';
}

function detectServerDevice($ua) {
    if (stripos($ua, 'iPad') !== false || stripos($ua, 'Tablet') !== false) return 'Tablet';
    if (stripos($ua, 'Mobile') !== false || stripos($ua, 'Android') !== false || stripos($ua, 'iPhone') !== false) return 'Mobile';
    return 'Desktop';
}

function normalizeLocation($locHint, $tz, $clientIp) {
    $loc = trim($locHint ?? '');
    if (!empty($loc) && $loc !== 'us UTC' && $loc !== 'UTC' && $loc !== '🌐 UTC' && $loc !== 'US UTC' && stripos($loc, 'UTC') === false) {
        return $loc;
    }
    if (!empty($tz) && (stripos($tz, 'Kolkata') !== false || stripos($tz, 'Calcutta') !== false)) {
        return 'India (IST)';
    }
    if (!empty($tz) && (stripos($tz, 'New_York') !== false || stripos($tz, 'Detroit') !== false)) {
        return 'United States (Eastern)';
    }
    if (!empty($tz) && (stripos($tz, 'Chicago') !== false)) {
        return 'United States (Central)';
    }
    if (!empty($tz) && (stripos($tz, 'Los_Angeles') !== false)) {
        return 'United States (Pacific)';
    }
    if (!empty($tz) && (stripos($tz, 'London') !== false)) {
        return 'United Kingdom (GMT)';
    }
    return 'India (IST)';
}

// Server GPU normalization helper
function normalizeServerGpu($raw) {
    if (!$raw || $raw === 'Unknown GPU' || $raw === 'WebGL Disabled') return $raw ?: 'Unknown GPU';
    $s = trim($raw);
    $s = preg_replace('/^ANGLE\s*\((.*)\)$/i', '$1', $s);
    $s = preg_replace('/\(0x[0-9a-fA-F]+\)/', '', $s);
    $s = preg_replace('/\bDirect3D\d*\b/i', '', $s);
    $s = preg_replace('/\bvs_\d+_\d+\s+ps_\d+_\d+\b/i', '', $s);
    $s = preg_replace('/\bD3D\d+\b/i', '', $s);
    $s = preg_replace('/\bOpenGL\s+Engine\b/i', '', $s);
    $s = preg_replace('/\bOpenGL\b/i', '', $s);
    $s = preg_replace('/\bMetal\b/i', '', $s);
    $s = preg_replace('/\bVulkan\b/i', '', $s);
    $s = preg_replace('/Intel\s*,\s*Intel/i', 'Intel', $s);
    $s = preg_replace('/NVIDIA\s+Corporation\s*,\s*NVIDIA/i', 'NVIDIA', $s);
    $s = preg_replace('/NVIDIA\s*,\s*NVIDIA/i', 'NVIDIA', $s);
    $s = preg_replace('/AMD\s*,\s*AMD/i', 'AMD', $s);
    $s = preg_replace('/Apple\s*,\s*Apple/i', 'Apple', $s);
    $s = preg_replace('/[,;()]+/', ' ', $s);
    $s = trim(preg_replace('/\s+/', ' ', $s));
    return $s ?: 'Unknown GPU';
}

$fallbackOS = detectServerOS($userAgent);
$fallbackDevice = detectServerDevice($userAgent);

try {
    $db->beginTransaction();

    // Check machine existence and server-side hardware signature matching
    $stmtCheckMach = $db->prepare("SELECT 1 FROM telemetry_machines WHERE machine_id = :mid LIMIT 1");
    $stmtReconcile = $db->prepare("
        SELECT machine_id FROM telemetry_machines
        WHERE ip_hash = :ip_hash 
          AND os_name = :os_name 
          AND gpu_renderer = :gpu_renderer 
          AND cpu_cores = :cpu_cores 
          AND timezone = :timezone
        ORDER BY last_seen_at DESC LIMIT 1
    ");

    $stmtEvent = $db->prepare("
        INSERT INTO telemetry_events (
            machine_id, browser_instance_id, session_id, event_name, category,
            session_event_seq, lifetime_upload_count, lifetime_quote_count,
            os_name, device_type, country, location_display,
            payload, url, referrer, utm_source, utm_medium, utm_campaign,
            duration_ms, created_at
        ) VALUES (
            :machine_id, :browser_instance_id, :session_id, :event_name, :category,
            :session_event_seq, :lifetime_upload_count, :lifetime_quote_count,
            :os_name, :device_type, :country, :location_display,
            :payload, :url, :referrer, :utm_source, :utm_medium, :utm_campaign,
            :duration_ms, :created_at
        )
    ");

    $stmtMachineUpsert = $db->prepare("
        INSERT INTO telemetry_machines (
            machine_id, first_seen_at, last_seen_at, total_sessions, total_events,
            upload_count, quote_generate_count, pdf_download_count, dxf_export_count,
            nesting_run_count, param_shape_count, material_change_count, sim_run_count,
            error_count, email_copy_count, share_count,
            os_name, device_type, country, location_display,
            gpu_renderer, cpu_cores, screen_res, timezone, known_browsers, ip_hash
        ) VALUES (
            :machine_id, :now, :now, 1, :events_count,
            :upload_inc, :quote_inc, :pdf_inc, :dxf_inc,
            :nest_inc, :param_inc, :mat_inc, :sim_inc,
            :error_inc, :email_inc, :share_inc,
            :os_name, :device_type, :country, :location_display,
            :gpu_renderer, :cpu_cores, :screen_res, :timezone, :known_browsers, :ip_hash
        )
        ON CONFLICT(machine_id) DO UPDATE SET
            last_seen_at = :now,
            total_events = telemetry_machines.total_events + :events_count,
            upload_count = telemetry_machines.upload_count + :upload_inc,
            quote_generate_count = telemetry_machines.quote_generate_count + :quote_inc,
            pdf_download_count = telemetry_machines.pdf_download_count + :pdf_inc,
            dxf_export_count = telemetry_machines.dxf_export_count + :dxf_inc,
            nesting_run_count = telemetry_machines.nesting_run_count + :nest_inc,
            param_shape_count = telemetry_machines.param_shape_count + :param_inc,
            material_change_count = telemetry_machines.material_change_count + :mat_inc,
            sim_run_count = telemetry_machines.sim_run_count + :sim_inc,
            error_count = telemetry_machines.error_count + :error_inc,
            email_copy_count = telemetry_machines.email_copy_count + :email_inc,
            share_count = telemetry_machines.share_count + :share_inc,
            os_name = COALESCE(:os_name, telemetry_machines.os_name),
            device_type = COALESCE(:device_type, telemetry_machines.device_type),
            country = COALESCE(:country, telemetry_machines.country),
            location_display = COALESCE(:location_display, telemetry_machines.location_display),
            known_browsers = CASE 
                WHEN :browser_name IS NOT NULL AND INSTR(COALESCE(telemetry_machines.known_browsers, '[]'), :browser_name) = 0
                THEN json_insert(COALESCE(telemetry_machines.known_browsers, '[]'), '$[#]', :browser_name)
                ELSE telemetry_machines.known_browsers
            END,
            ip_hash = :ip_hash
    ");

    $stmtSessionUpsert = $db->prepare("
        INSERT INTO telemetry_sessions (
            session_id, machine_id, browser_instance_id, started_at, last_active_at,
            total_events, upload_count, quote_generate_count, pdf_download_count,
            dxf_export_count, nesting_run_count, error_count,
            os_name, device_type, country, location_display,
            referrer, utm_source, utm_medium, utm_campaign, user_agent, ip_hash
        ) VALUES (
            :session_id, :machine_id, :browser_instance_id, :now, :now,
            :events_count, :upload_inc, :quote_inc, :pdf_inc,
            :dxf_inc, :nest_inc, :error_inc,
            :os_name, :device_type, :country, :location_display,
            :referrer, :utm_source, :utm_medium, :utm_campaign, :user_agent, :ip_hash
        )
        ON CONFLICT(session_id) DO UPDATE SET
            last_active_at = :now,
            total_events = telemetry_sessions.total_events + :events_count,
            upload_count = telemetry_sessions.upload_count + :upload_inc,
            quote_generate_count = telemetry_sessions.quote_generate_count + :quote_inc,
            pdf_download_count = telemetry_sessions.pdf_download_count + :pdf_inc,
            dxf_export_count = telemetry_sessions.dxf_export_count + :dxf_inc,
            nesting_run_count = telemetry_sessions.nesting_run_count + :nest_inc,
            error_count = telemetry_sessions.error_count + :error_inc,
            os_name = COALESCE(:os_name, telemetry_sessions.os_name),
            device_type = COALESCE(:device_type, telemetry_sessions.device_type),
            country = COALESCE(:country, telemetry_sessions.country),
            location_display = COALESCE(:location_display, telemetry_sessions.location_display)
    ");

    // Aggregate counts across batch
    $machineAggregates = [];

    foreach ($events as $event) {
        $machineId = $event['machine_id'] ?? 'unknown_machine';
        $browserId = $event['browser_instance_id'] ?? 'unknown_browser';
        $sessionId = $event['session_id'] ?? 'unknown_session';
        $eventName = $event['event_name'] ?? 'unknown_event';
        $category = $event['category'] ?? 'GENERAL';
        $seq = (int)($event['session_event_seq'] ?? 1);
        $lifeUploads = (int)($event['lifetime_upload_count'] ?? 0);
        $lifeQuotes = (int)($event['lifetime_quote_count'] ?? 0);
        $osName = $event['os_name'] ?? $fallbackOS;
        $deviceType = $event['device_type'] ?? $fallbackDevice;
        $locationDisplay = normalizeLocation($event['location_hint'] ?? null, $event['hw_tz'] ?? null, $clientIp);
        $country = $event['country'] ?? (stripos($locationDisplay, 'India') !== false ? 'IN' : ($serverCountry ?? 'IN'));
        $payload = is_array($event['payload'] ?? null) ? json_encode($event['payload']) : ($event['payload'] ?? '{}');
        $url = $event['url'] ?? '';
        $referrer = $event['referrer'] ?? '';
        $utmSource = $event['utm_source'] ?? null;
        $utmMedium = $event['utm_medium'] ?? null;
        $utmCampaign = $event['utm_campaign'] ?? null;
        $durationMs = isset($event['duration_ms']) ? (float)$event['duration_ms'] : 0.0;
        $createdAt = $event['created_at'] ?? $now;

        $rawGpu = $event['hw_gpu'] ?? null;
        $normalizedGpu = normalizeServerGpu($rawGpu);
        $cpuCores = isset($event['hw_cores']) ? (int)$event['hw_cores'] : null;
        $screenRes = $event['hw_screen'] ?? null;
        $tz = $event['hw_tz'] ?? null;

        // Level 3 Multi-Layer Machine Reconciliation:
        // If incoming machineId is not yet registered in telemetry_machines, check if an existing machine matches (ip_hash + os_name + normalized_gpu + cpu_cores + timezone)
        if (!empty($machineId) && $normalizedGpu !== 'Unknown GPU' && $cpuCores !== null && !empty($tz)) {
            $stmtCheckMach->execute([':mid' => $machineId]);
            $exists = $stmtCheckMach->fetchColumn();
            if (!$exists) {
                $stmtReconcile->execute([
                    ':ip_hash' => $ipHash,
                    ':os_name' => $osName,
                    ':gpu_renderer' => $normalizedGpu,
                    ':cpu_cores' => $cpuCores,
                    ':timezone' => $tz
                ]);
                $canonicalId = $stmtReconcile->fetchColumn();
                if ($canonicalId) {
                    $machineId = $canonicalId;
                }
            }
        }

        // Insert individual event record
        $stmtEvent->execute([
            ':machine_id' => $machineId,
            ':browser_instance_id' => $browserId,
            ':session_id' => $sessionId,
            ':event_name' => $eventName,
            ':category' => $category,
            ':session_event_seq' => $seq,
            ':lifetime_upload_count' => $lifeUploads,
            ':lifetime_quote_count' => $lifeQuotes,
            ':os_name' => $osName,
            ':device_type' => $deviceType,
            ':country' => $country,
            ':location_display' => $locationDisplay,
            ':payload' => $payload,
            ':url' => $url,
            ':referrer' => $referrer,
            ':utm_source' => $utmSource,
            ':utm_medium' => $utmMedium,
            ':utm_campaign' => $utmCampaign,
            ':duration_ms' => $durationMs,
            ':created_at' => $createdAt
        ]);

        // Aggregate for machine & session upsert
        if (!isset($machineAggregates[$machineId])) {
            $machineAggregates[$machineId] = [
                'session_id' => $sessionId,
                'browser_id' => $browserId,
                'events_count' => 0,
                'upload_inc' => 0,
                'quote_inc' => 0,
                'pdf_inc' => 0,
                'dxf_inc' => 0,
                'nest_inc' => 0,
                'param_inc' => 0,
                'mat_inc' => 0,
                'sim_inc' => 0,
                'error_inc' => 0,
                'email_inc' => 0,
                'share_inc' => 0,
                'os_name' => $osName,
                'device_type' => $deviceType,
                'country' => $country,
                'location_display' => $locationDisplay,
                'gpu_renderer' => $normalizedGpu,
                'cpu_cores' => $cpuCores,
                'screen_res' => $screenRes,
                'timezone' => $tz,
                'browser_name' => $event['browser_name'] ?? null,
                'referrer' => $referrer,
                'utm_source' => $utmSource,
                'utm_medium' => $utmMedium,
                'utm_campaign' => $utmCampaign,
            ];
        }

        $agg = &$machineAggregates[$machineId];
        $agg['events_count']++;

        switch ($eventName) {
            case 'file_uploaded':
                $agg['upload_inc']++;
                break;
            case 'demo_loaded':
                // Demo loaded is a showcase sample, not a real user file upload
                break;
            case 'quote_calculated':
            case 'quote_viewed':
                $agg['quote_inc']++;
                break;
            case 'pdf_quote_downloaded':
                $agg['pdf_inc']++;
                $agg['quote_inc']++;
                break;
            case 'dxf_exported':
            case 'cam_dxf_exported':
                $agg['dxf_inc']++;
                break;
            case 'nesting_executed':
                $agg['nest_inc']++;
                break;
            case 'param_shape_generated':
                $agg['param_inc']++;
                break;
            case 'material_changed':
            case 'thickness_changed':
            case 'gas_changed':
                $agg['mat_inc']++;
                break;
            case 'cam_sim_started':
                $agg['sim_inc']++;
                break;
            case 'tool_error':
            case 'runtime_exception':
                $agg['error_inc']++;
                break;
            case 'quote_email_copied':
                $agg['email_inc']++;
                break;
            case 'quote_shared_whatsapp':
            case 'quote_link_copied':
                $agg['share_inc']++;
                break;
        }
    }

    // Upsert machines and sessions
    foreach ($machineAggregates as $machId => $agg) {
        $stmtMachineUpsert->execute([
            ':machine_id' => $machId,
            ':now' => $now,
            ':events_count' => $agg['events_count'],
            ':upload_inc' => $agg['upload_inc'],
            ':quote_inc' => $agg['quote_inc'],
            ':pdf_inc' => $agg['pdf_inc'],
            ':dxf_inc' => $agg['dxf_inc'],
            ':nest_inc' => $agg['nest_inc'],
            ':param_inc' => $agg['param_inc'],
            ':mat_inc' => $agg['mat_inc'],
            ':sim_inc' => $agg['sim_inc'],
            ':error_inc' => $agg['error_inc'],
            ':email_inc' => $agg['email_inc'],
            ':share_inc' => $agg['share_inc'],
            ':os_name' => $agg['os_name'],
            ':device_type' => $agg['device_type'],
            ':country' => $agg['country'],
            ':location_display' => $agg['location_display'],
            ':gpu_renderer' => $agg['gpu_renderer'],
            ':cpu_cores' => $agg['cpu_cores'],
            ':screen_res' => $agg['screen_res'],
            ':timezone' => $agg['timezone'],
            ':known_browsers' => json_encode($agg['browser_name'] ? [$agg['browser_name']] : []),
            ':browser_name' => $agg['browser_name'] ? '"' . $agg['browser_name'] . '"' : null,
            ':ip_hash' => $ipHash
        ]);

        $stmtSessionUpsert->execute([
            ':session_id' => $agg['session_id'],
            ':machine_id' => $machId,
            ':browser_instance_id' => $agg['browser_id'],
            ':now' => $now,
            ':events_count' => $agg['events_count'],
            ':upload_inc' => $agg['upload_inc'],
            ':quote_inc' => $agg['quote_inc'],
            ':pdf_inc' => $agg['pdf_inc'],
            ':dxf_inc' => $agg['dxf_inc'],
            ':nest_inc' => $agg['nest_inc'],
            ':error_inc' => $agg['error_inc'],
            ':os_name' => $agg['os_name'],
            ':device_type' => $agg['device_type'],
            ':country' => $agg['country'],
            ':location_display' => $agg['location_display'],
            ':referrer' => $agg['referrer'],
            ':utm_source' => $agg['utm_source'],
            ':utm_medium' => $agg['utm_medium'],
            ':utm_campaign' => $agg['utm_campaign'],
            ':user_agent' => $userAgent,
            ':ip_hash' => $ipHash
        ]);
    }

    $db->commit();

    // Send fast JSON success response
    http_response_code(200);
    echo json_encode(["status" => "ok", "ingested" => count($events)]);
} catch (Exception $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    http_response_code(500);
    echo json_encode(["error" => "Ingestion failed", "message" => $e->getMessage()]);
}

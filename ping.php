<?php
// ====================================================================
// SheetTally - Silent SQLite Visitor & Click Engine
// File: ping.php (Discreet name, PDO SQLite backed)
// ====================================================================

$db_dir = __DIR__ . '/data';
$db_file = $db_dir . '/analytics.sqlite';
$secret_key = 'laser2026'; // Key to view dashboard: ping.php?key=laser2026

// Helper: Initialize SQLite DB via PDO
function get_db_connection($db_dir, $db_file) {
    if (!is_dir($db_dir)) {
        @mkdir($db_dir, 0755, true);
    }
    $pdo = new PDO('sqlite:' . $db_file);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Auto-create schema on first run
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS visits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            source TEXT DEFAULT 'direct',
            city TEXT,
            region TEXT,
            country TEXT,
            isp_org TEXT,
            device TEXT,
            ip TEXT,
            user_agent TEXT
        );
        CREATE INDEX IF NOT EXISTS idx_visits_created ON visits(created_at);
        CREATE INDEX IF NOT EXISTS idx_visits_ip ON visits(ip);
    ");

    return $pdo;
}

// --------------------------------------------------------------------
// 1. CSV Export for Excel (ping.php?key=laser2026&export=csv)
// --------------------------------------------------------------------
if (isset($_GET['key']) && $_GET['key'] === $secret_key && isset($_GET['export']) && $_GET['export'] === 'csv') {
    $pdo = get_db_connection($db_dir, $db_file);
    $stmt = $pdo->query("SELECT id, created_at, source, city, region, country, isp_org, device, ip, user_agent FROM visits ORDER BY id DESC");
    $rows = $stmt->fetchAll();

    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=sheettally_visits_' . date('Y-m-d') . '.csv');
    $output = fopen('php://output', 'w');
    fputcsv($output, ['ID', 'Timestamp (UTC)', 'Source', 'City', 'Region/State', 'Country', 'Company/ISP', 'Device', 'IP', 'User Agent']);
    foreach ($rows as $row) {
        fputcsv($output, $row);
    }
    fclose($output);
    exit;
}

// --------------------------------------------------------------------
// 2. Private Dashboard (ping.php?key=laser2026)
// --------------------------------------------------------------------
if (isset($_GET['key']) && $_GET['key'] === $secret_key) {
    $pdo = get_db_connection($db_dir, $db_file);

    // Summary statistics
    $total_visits = $pdo->query("SELECT COUNT(*) FROM visits")->fetchColumn() ?: 0;
    $unique_ips = $pdo->query("SELECT COUNT(DISTINCT ip) FROM visits")->fetchColumn() ?: 0;
    $demo_clicks = $pdo->query("SELECT COUNT(*) FROM visits WHERE source = 'demo'")->fetchColumn() ?: 0;

    // Recent 100 visits
    $stmt = $pdo->query("SELECT * FROM visits ORDER BY id DESC LIMIT 100");
    $recent_visits = $stmt->fetchAll();

    header("Content-Type: text/html; charset=UTF-8");
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SheetTally Analytics (SQLite)</title>
        <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0a0e17; color: #e2e8f0; padding: 28px; }
            .container { max-width: 1200px; margin: 0 auto; }
            header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #1e293b; }
            h1 { font-size: 22px; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 10px; }
            .badge-db { font-size: 11px; background: #0369a1; color: #bae6fd; padding: 2px 8px; border-radius: 9999px; text-transform: uppercase; font-weight: 700; }
            .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
            .metric-card { background: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 16px; }
            .metric-label { font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .metric-value { font-size: 28px; font-weight: 700; color: #f8fafc; }
            .metric-sub { font-size: 12px; color: #38bdf8; margin-top: 4px; }
            .btn { background: #0284c7; color: white; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; }
            .btn:hover { background: #0369a1; }
            table { width: 100%; border-collapse: collapse; background: #111827; border: 1px solid #1f2937; border-radius: 8px; overflow: hidden; font-size: 13px; }
            th { background: #1e293b; color: #94a3b8; text-align: left; padding: 12px 14px; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; border-bottom: 1px solid #334155; }
            td { padding: 12px 14px; border-bottom: 1px solid #1f2937; color: #cbd5e1; vertical-align: middle; }
            tr:hover td { background: #172033; }
            .badge-city { background: #064e3b; color: #6ee7b7; padding: 3px 8px; border-radius: 4px; font-weight: 600; font-size: 12px; }
            .badge-source { background: #312e81; color: #a5b4fc; padding: 2px 7px; border-radius: 4px; font-size: 11px; text-transform: uppercase; font-weight: 600; }
            .badge-demo { background: #831843; color: #f472b6; }
            .badge-device { background: #1e293b; color: #94a3b8; border: 1px solid #334155; padding: 2px 6px; border-radius: 4px; font-size: 11px; }
            .empty { text-align: center; padding: 60px; color: #64748b; background: #111827; border-radius: 8px; border: 1px dashed #334155; }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <div>
                    <h1>⚡ SheetTally Visitor Hub <span class="badge-db">SQLite</span></h1>
                    <p style="color: #64748b; font-size: 13px; margin-top: 4px;">Discreet real-time tracking from fabricator RFQs and cold outreach</p>
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <a href="ping.php?key=<?= urlencode($secret_key) ?>&export=csv" class="btn">📥 Export to CSV</a>
                </div>
            </header>

            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-label">Total Clicks / Visits</div>
                    <div class="metric-value"><?= number_format($total_visits) ?></div>
                    <div class="metric-sub">Recorded in SQLite</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">Unique Prospects (IP)</div>
                    <div class="metric-value"><?= number_format($unique_ips) ?></div>
                    <div class="metric-sub">Distinct shops / networks</div>
                </div>
                <div class="metric-card">
                    <div class="metric-label">/demo Link Clicks</div>
                    <div class="metric-value"><?= number_format($demo_clicks) ?></div>
                    <div class="metric-sub">From direct demo link</div>
                </div>
            </div>

            <?php if (empty($recent_visits)): ?>
                <div class="empty">
                    <h3>No visits recorded yet</h3>
                    <p style="margin-top: 8px; font-size: 13px;">Send your clean link in email and click events will instantly appear here.</p>
                </div>
            <?php else: ?>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Time</th>
                            <th>Channel</th>
                            <th>Location (City, State, Country)</th>
                            <th>Company / ISP Network</th>
                            <th>Device</th>
                            <th>IP Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($recent_visits as $v): 
                            $loc = trim(($v['city'] ? $v['city'] . ', ' : '') . ($v['region'] ? $v['region'] . ' ' : '') . ($v['country'] ?: ''));
                            if (!$loc) $loc = 'Unknown';
                            $source_class = ($v['source'] === 'demo') ? 'badge-source badge-demo' : 'badge-source';
                        ?>
                            <tr>
                                <td style="color: #64748b; font-size: 11px;"><?= $v['id'] ?></td>
                                <td><?= htmlspecialchars($v['created_at']) ?></td>
                                <td><span class="<?= $source_class ?>"><?= htmlspecialchars($v['source']) ?></span></td>
                                <td><span class="badge-city"><?= htmlspecialchars($loc) ?></span></td>
                                <td><strong><?= htmlspecialchars($v['isp_org'] ?: 'Commercial ISP') ?></strong></td>
                                <td><span class="badge-device"><?= htmlspecialchars($v['device'] ?: 'Desktop') ?></span></td>
                                <td style="font-family: monospace; color: #64748b; font-size: 12px;"><?= htmlspecialchars($v['ip']) ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php endif; ?>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// --------------------------------------------------------------------
// 3. Record Silent Visit to SQLite (Called on page load)
// --------------------------------------------------------------------
record_visit_to_sqlite('direct');
http_response_code(204); // Return 204 No Content
exit;

// Reusable function to capture visitor and store in SQLite
function record_visit_to_sqlite($source_tag = 'direct') {
    global $db_dir, $db_file;

    // Detect client IP
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] 
        ?? $_SERVER['HTTP_X_REAL_IP'] 
        ?? $_SERVER['HTTP_X_FORWARDED_FOR'] 
        ?? $_SERVER['REMOTE_ADDR'] 
        ?? '127.0.0.1';

    if (strpos($ip, ',') !== false) {
        $ip = trim(explode(',', $ip)[0]);
    }

    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';

    // Ignore known preview and search bot crawlers
    $bot_pattern = '/(bot|crawl|slurp|spider|facebook|twitter|linkedin|preview|curl|wget|uptime|headless)/i';
    if (preg_match($bot_pattern, $user_agent)) {
        return;
    }

    $device = preg_match('/(mobi|iphone|ipad|android)/i', $user_agent) ? 'Mobile/Tablet' : 'Desktop';
    $city = null;
    $region = null;
    $country = null;
    $isp_org = null;

    // Fast reverse IP Geolocation lookup
    if ($ip !== '127.0.0.1' && $ip !== '::1') {
        $ctx = stream_context_create(['http' => ['timeout' => 1]]);
        $geo_json = @file_get_contents("http://ip-api.com/json/{$ip}?fields=status,city,regionName,country,isp,org", false, $ctx);
        if ($geo_json) {
            $geo = json_decode($geo_json, true);
            if ($geo && isset($geo['status']) && $geo['status'] === 'success') {
                $city = $geo['city'] ?? null;
                $region = $geo['regionName'] ?? null;
                $country = $geo['country'] ?? null;
                $isp_org = $geo['org'] ?: $geo['isp'] ?: null;
            }
        }
    }

    try {
        $pdo = get_db_connection($db_dir, $db_file);
        $stmt = $pdo->prepare("
            INSERT INTO visits (source, city, region, country, isp_org, device, ip, user_agent)
            VALUES (:source, :city, :region, :country, :isp_org, :device, :ip, :user_agent)
        ");
        $stmt->execute([
            ':source' => $source_tag,
            ':city' => $city,
            ':region' => $region,
            ':country' => $country,
            ':isp_org' => $isp_org,
            ':device' => $device,
            ':ip' => $ip,
            ':user_agent' => substr($user_agent, 0, 255)
        ]);
    } catch (Exception $e) {
        // Fail silently so user experience is never impacted
    }
}

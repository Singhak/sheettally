<?php
/**
 * SheetDXF Unified Telemetry, Activity & Error Monitoring Dashboard
 * 
 * - Executive KPI Ribbon & Conversion Funnels
 * - Invariant Physical Machine Inspector (Cross-Browser ID, Lifetime Uploads, Quotes)
 * - Machine Type & OS Tracking (Windows, Mac, Linux, iOS, Android, Desktop vs Mobile)
 * - Geographical Location & Timezone Tracking
 * - Timestamps in Indian Standard Time (IST — UTC+5:30)
 * - Tool Error Center & Health Diagnostic Console
 * - Manufacturing Insights (Materials, Gauges, Nesting Yields)
 * - Live Event Feed & CSV / SQLite DB Exporter
 */

// Force all dashboard timestamps and operations to IST (Asia/Kolkata)
date_default_timezone_set('Asia/Kolkata');

$dataDir = __DIR__ . '/data';
$dbPath = $dataDir . '/telemetry.db';

// Ensure DB exists
$dbExists = file_exists($dbPath);
$db = null;
if ($dbExists) {
    try {
        $db = new PDO("sqlite:" . $dbPath);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (Exception $e) {
        $db = null;
    }
}

// Handle Database Download
if (isset($_GET['action']) && $_GET['action'] === 'download_db' && $dbExists) {
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="sheetdxf_telemetry_' . date('Y-m-d') . '.db"');
    header('Content-Length: ' . filesize($dbPath));
    readfile($dbPath);
    exit;
}

// Handle CSV Export
if (isset($_GET['action']) && $_GET['action'] === 'export_csv' && $db) {
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="sheetdxf_telemetry_events_' . date('Y-m-d_His') . '.csv"');
    $out = fopen('php://output', 'w');
    fputcsv($out, ['ID', 'Machine ID', 'OS', 'Device Type', 'Location', 'Browser Instance', 'Session ID', 'Event Name', 'Category', 'Lifetime Uploads', 'Lifetime Quotes', 'Duration (ms)', 'Created At', 'Payload']);

    $stmt = $db->query("SELECT id, machine_id, os_name, device_type, location_display, browser_instance_id, session_id, event_name, category, lifetime_upload_count, lifetime_quote_count, duration_ms, created_at, payload FROM telemetry_events ORDER BY id DESC LIMIT 5000");
    while ($row = $stmt->fetch()) {
        fputcsv($out, [
            $row['id'],
            $row['machine_id'],
            $row['os_name'] ?? 'Unknown',
            $row['device_type'] ?? 'Desktop',
            $row['location_display'] ?? '',
            $row['browser_instance_id'],
            $row['session_id'],
            $row['event_name'],
            $row['category'],
            $row['lifetime_upload_count'],
            $row['lifetime_quote_count'],
            $row['duration_ms'],
            $row['created_at'],
            $row['payload']
        ]);
    }
    fclose($out);
    exit;
}

// Handle JSON API endpoint for live polling
if (isset($_GET['format']) && $_GET['format'] === 'json' && $db) {
    header('Content-Type: application/json');
    $limit = min((int)($_GET['limit'] ?? 50), 200);
    $category = $_GET['category'] ?? '';
    $search = $_GET['search'] ?? '';

    $sql = "SELECT * FROM telemetry_events WHERE 1=1";
    $params = [];
    if (!empty($category)) {
        $sql .= " AND category = :cat";
        $params[':cat'] = $category;
    }
    if (!empty($search)) {
        $sql .= " AND (machine_id LIKE :search OR event_name LIKE :search OR payload LIKE :search OR os_name LIKE :search OR location_display LIKE :search)";
        $params[':search'] = "%$search%";
    }
    $sql .= " ORDER BY id DESC LIMIT $limit";
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    echo json_encode($stmt->fetchAll());
    exit;
}

// Query Core KPI Metrics
$kpis = [
    'machines' => 0,
    'sessions' => 0,
    'events' => 0,
    'uploads' => 0,
    'quotes' => 0,
    'pdf_quotes' => 0,
    'nesting_runs' => 0,
    'dxf_exports' => 0,
    'tool_errors' => 0,
    'conversion_rate' => '0%'
];

$machinesList = [];
$recentEvents = [];
$recentErrors = [];
$osStats = [];
$deviceStats = [];
$locationStats = [];

if ($db) {
    try {
        // Machine counts
        $res = $db->query("SELECT 
            COUNT(machine_id) as total_machines,
            SUM(total_sessions) as total_sessions,
            SUM(total_events) as total_events,
            SUM(upload_count) as total_uploads,
            SUM(quote_generate_count) as total_quotes,
            SUM(pdf_download_count) as total_pdf_quotes,
            SUM(nesting_run_count) as total_nesting,
            SUM(dxf_export_count) as total_dxf_exports,
            SUM(error_count) as total_errors
        FROM telemetry_machines")->fetch();

        if ($res) {
            $kpis['machines'] = (int)($res['total_machines'] ?? 0);
            $kpis['sessions'] = (int)($res['total_sessions'] ?? 0);
            $kpis['events'] = (int)($res['total_events'] ?? 0);
            $kpis['uploads'] = (int)($res['total_uploads'] ?? 0);
            $kpis['quotes'] = (int)($res['total_quotes'] ?? 0);
            $kpis['pdf_quotes'] = (int)($res['total_pdf_quotes'] ?? 0);
            $kpis['nesting_runs'] = (int)($res['total_nesting'] ?? 0);
            $kpis['dxf_exports'] = (int)($res['total_dxf_exports'] ?? 0);
            $kpis['tool_errors'] = (int)($res['total_errors'] ?? 0);
            if ($kpis['uploads'] > 0) {
                $kpis['conversion_rate'] = round(($kpis['pdf_quotes'] + $kpis['dxf_exports']) / $kpis['uploads'] * 100, 1) . '%';
            }
        }

        // Platform & Location Distribution
        $osStats = $db->query("SELECT COALESCE(os_name, 'Unknown') as name, COUNT(*) as count FROM telemetry_machines GROUP BY os_name ORDER BY count DESC LIMIT 6")->fetchAll();
        $deviceStats = $db->query("SELECT COALESCE(device_type, 'Desktop') as name, COUNT(*) as count FROM telemetry_machines GROUP BY device_type ORDER BY count DESC LIMIT 4")->fetchAll();
        $locationStats = $db->query("SELECT COALESCE(location_display, timezone, 'Unknown') as name, COUNT(*) as count FROM telemetry_machines GROUP BY name ORDER BY count DESC LIMIT 6")->fetchAll();

        // Top active machines
        $machinesList = $db->query("SELECT * FROM telemetry_machines ORDER BY last_seen_at DESC LIMIT 50")->fetchAll();

        // Recent events
        $recentEvents = $db->query("SELECT * FROM telemetry_events ORDER BY id DESC LIMIT 50")->fetchAll();

        // Recent errors
        $recentErrors = $db->query("SELECT * FROM telemetry_events WHERE category = 'ERROR' ORDER BY id DESC LIMIT 25")->fetchAll();

    } catch (Exception $e) {
        $errorMsg = $e->getMessage();
    }
}

// Helper to format OS pill with icon
function formatOSPill($osName, $deviceType = 'Desktop') {
    $os = $osName ?? 'Unknown';
    $dev = $deviceType ?? 'Desktop';
    $icon = '💻';
    $color = '#94a3b8';
    $bg = 'rgba(148, 163, 184, 0.12)';

    if (stripos($os, 'Windows') !== false) {
        $icon = '🪟';
        $color = '#38bdf8';
        $bg = 'rgba(56, 189, 248, 0.15)';
    } elseif (stripos($os, 'macOS') !== false || stripos($os, 'Mac') !== false) {
        $icon = '🍎';
        $color = '#f1f5f9';
        $bg = 'rgba(255, 255, 255, 0.15)';
    } elseif (stripos($os, 'Linux') !== false) {
        $icon = '🐧';
        $color = '#f97316';
        $bg = 'rgba(249, 115, 22, 0.15)';
    } elseif (stripos($os, 'iOS') !== false) {
        $icon = '📱';
        $color = '#a855f7';
        $bg = 'rgba(168, 85, 247, 0.15)';
    } elseif (stripos($os, 'Android') !== false) {
        $icon = '🤖';
        $color = '#22c55e';
        $bg = 'rgba(34, 197, 94, 0.15)';
    }

    $devIcon = ($dev === 'Mobile') ? '📱' : (($dev === 'Tablet') ? '📟' : '🖥️');

    return "<span style=\"display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; background: {$bg}; color: {$color}; border: 1px solid rgba(255,255,255,0.08);\">"
        . "<span>{$icon} {$os}</span>"
        . "<span style=\"color: #94a3b8; font-size: 0.65rem;\">({$devIcon} {$dev})</span>"
        . "</span>";
}

// Helper to format timestamps in readable Indian Standard Time (IST)
function formatISTDate($dateStr) {
    if (!$dateStr) return '-';
    $time = strtotime($dateStr);
    if (!$time) return htmlspecialchars($dateStr);
    return date('d M Y, h:i:s A', $time) . ' IST';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SheetDXF — Telemetry, Activity & Error Monitoring Center</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-base: #0a0d14;
            --bg-card: #121824;
            --bg-card-hover: #182030;
            --border: #222e42;
            --border-highlight: #3b82f6;
            --text-main: #f1f5f9;
            --text-muted: #94a3b8;
            --accent-blue: #38bdf8;
            --accent-green: #22c55e;
            --accent-yellow: #eab308;
            --accent-red: #ef4444;
            --accent-purple: #a855f7;
            --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background-color: var(--bg-base);
            color: var(--text-main);
            font-family: var(--font-sans);
            padding: 1.5rem;
            min-height: 100vh;
            line-height: 1.5;
        }

        /* Header */
        .dash-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
            margin-bottom: 1.75rem;
        }
        .dash-brand {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .dash-brand-title {
            font-size: 1.35rem;
            font-weight: 800;
            background: linear-gradient(135deg, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .dash-status-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: rgba(34, 197, 94, 0.12);
            color: var(--accent-green);
            padding: 0.25rem 0.65rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .dash-status-pill.offline {
            background: rgba(239, 68, 68, 0.12);
            color: var(--accent-red);
            border-color: rgba(239, 68, 68, 0.3);
        }
        .dash-pulse-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: currentColor;
            animation: pulse 1.8s infinite;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.85); } }

        .dash-actions {
            display: flex;
            gap: 0.6rem;
            align-items: center;
        }
        .btn {
            background: var(--bg-card);
            color: var(--text-main);
            border: 1px solid var(--border);
            padding: 0.45rem 0.85rem;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            transition: all 0.15s ease;
        }
        .btn:hover {
            background: var(--bg-card-hover);
            border-color: var(--accent-blue);
            color: #fff;
        }
        .btn-primary {
            background: linear-gradient(135deg, #0284c7, #2563eb);
            border-color: rgba(56, 189, 248, 0.4);
            color: #fff;
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #0369a1, #1d4ed8);
        }
        .btn-danger {
            background: rgba(239, 68, 68, 0.15);
            border-color: rgba(239, 68, 68, 0.4);
            color: #fca5a5;
        }
        .btn-danger:hover {
            background: rgba(239, 68, 68, 0.3);
            color: #fff;
        }

        /* KPI Ribbon */
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .kpi-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 1rem 1.1rem;
            position: relative;
            overflow: hidden;
        }
        .kpi-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: var(--accent-blue);
        }
        .kpi-card.kpi-green::before { background: var(--accent-green); }
        .kpi-card.kpi-yellow::before { background: var(--accent-yellow); }
        .kpi-card.kpi-warn::before { background: var(--accent-red); }
        .kpi-card.kpi-purple::before { background: var(--accent-purple); }

        .kpi-title {
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: var(--text-muted);
            margin-bottom: 0.35rem;
        }
        .kpi-value {
            font-size: 1.6rem;
            font-weight: 800;
            color: #fff;
            font-family: var(--font-mono);
            line-height: 1.1;
        }
        .kpi-sub {
            font-size: 0.72rem;
            color: var(--text-muted);
            margin-top: 0.35rem;
        }

        /* Platform Breakdown Mini-Ribbon */
        .platform-ribbon {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .platform-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 0.9rem 1.1rem;
        }
        .platform-header {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.04em;
            margin-bottom: 0.6rem;
            display: flex;
            justify-content: space-between;
        }
        .p-chips-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
        }
        .p-chip {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 6px;
            padding: 0.25rem 0.55rem;
            font-size: 0.72rem;
        }
        .p-chip-cnt {
            font-weight: 700;
            color: var(--accent-blue);
            font-family: var(--font-mono);
        }

        /* Funnel Card */
        .funnel-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 1.25rem;
            margin-bottom: 1.75rem;
        }
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        .section-title {
            font-size: 0.95rem;
            font-weight: 700;
            color: #fff;
        }
        .funnel-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 0.75rem;
        }
        .funnel-step {
            background: rgba(0,0,0,0.25);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 0.85rem;
            text-align: center;
        }
        .funnel-step-num {
            font-size: 0.65rem;
            font-weight: 800;
            color: var(--accent-blue);
            margin-bottom: 0.2rem;
        }
        .funnel-step-name {
            font-size: 0.75rem;
            color: var(--text-muted);
            margin-bottom: 0.3rem;
        }
        .funnel-step-val {
            font-size: 1.2rem;
            font-weight: 800;
            color: #fff;
            font-family: var(--font-mono);
        }

        /* Tabs Navigation */
        .dash-tabs {
            display: flex;
            gap: 0.5rem;
            border-bottom: 1px solid var(--border);
            margin-bottom: 1.25rem;
        }
        .tab-btn {
            background: transparent;
            color: var(--text-muted);
            border: none;
            padding: 0.65rem 1.1rem;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.15s ease;
        }
        .tab-btn:hover {
            color: var(--text-main);
        }
        .tab-btn.active {
            color: var(--accent-blue);
            border-bottom-color: var(--accent-blue);
        }
        .tab-badge {
            background: rgba(255,255,255,0.08);
            padding: 0.1rem 0.45rem;
            border-radius: 9999px;
            font-size: 0.7rem;
            font-weight: 700;
        }
        .tab-badge.badge-error {
            background: rgba(239, 68, 68, 0.2);
            color: var(--accent-red);
        }

        /* Tab Panels */
        .tab-panel { display: none; }
        .tab-panel.active { display: block; }

        /* Table Design */
        .table-wrap {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 10px;
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 0.8rem;
        }
        th {
            background: rgba(255,255,255,0.03);
            color: var(--text-muted);
            padding: 0.75rem 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 0.7rem;
            border-bottom: 1px solid var(--border);
            white-space: nowrap;
        }
        td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.04);
            color: var(--text-main);
        }
        tr:hover td { background: var(--bg-card-hover); }

        /* Badges & Tags */
        .tier-badge {
            display: inline-block;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.68rem;
            font-weight: 700;
        }
        .tier-hot { background: rgba(234, 179, 8, 0.2); color: #fef08a; border: 1px solid rgba(234, 179, 8, 0.4); }
        .tier-high { background: rgba(56, 189, 248, 0.2); color: #bae6fd; border: 1px solid rgba(56, 189, 248, 0.4); }
        .tier-active { background: rgba(168, 85, 247, 0.2); color: #e9d5ff; border: 1px solid rgba(168, 85, 247, 0.4); }
        .tier-visitor { background: rgba(148, 163, 184, 0.15); color: #cbd5e1; border: 1px solid rgba(148, 163, 184, 0.3); }

        .cat-tag {
            display: inline-block;
            padding: 0.15rem 0.45rem;
            border-radius: 4px;
            font-size: 0.68rem;
            font-weight: 700;
            font-family: var(--font-mono);
        }
        .cat-CAD { background: rgba(56, 189, 248, 0.15); color: var(--accent-blue); }
        .cat-PRICING { background: rgba(34, 197, 94, 0.15); color: var(--accent-green); }
        .cat-NESTING { background: rgba(168, 85, 247, 0.15); color: var(--accent-purple); }
        .cat-CONVERSION { background: rgba(234, 179, 8, 0.15); color: var(--accent-yellow); }
        .cat-ERROR { background: rgba(239, 68, 68, 0.15); color: var(--accent-red); }

        .code-pill {
            font-family: var(--font-mono);
            font-size: 0.72rem;
            background: rgba(0,0,0,0.3);
            padding: 0.15rem 0.4rem;
            border-radius: 4px;
            color: #e2e8f0;
        }

        .loc-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
            font-size: 0.74rem;
            color: #fde047;
            font-weight: 500;
        }

        /* Modal */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(4px);
            z-index: 9999;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
        }
        .modal-overlay.open { display: flex; }
        .modal-box {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            width: 100%;
            max-width: 650px;
            max-height: 85vh;
            overflow-y: auto;
            padding: 1.5rem;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.75rem;
        }
        .modal-pre {
            background: #070a10;
            border: 1px solid var(--border);
            border-radius: 6px;
            padding: 1rem;
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: #38bdf8;
            overflow-x: auto;
            white-space: pre-wrap;
            word-break: break-all;
        }

        /* Search Bar */
        .table-filter-bar {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
            align-items: center;
            flex-wrap: wrap;
        }
        .search-input {
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: #fff;
            padding: 0.45rem 0.75rem;
            border-radius: 6px;
            font-size: 0.8rem;
            outline: none;
            width: 250px;
        }
        .search-input:focus { border-color: var(--accent-blue); }
    </style>
</head>
<body>

    <!-- Header -->
    <header class="dash-header">
        <div class="dash-brand">
            <div class="dash-brand-title">⚡ SheetDXF Telemetry & Monitoring</div>
            <div class="dash-status-pill <?= $db ? '' : 'offline' ?>">
                <span class="dash-pulse-dot"></span>
                <span><?= $db ? 'SQLite Live (WAL Mode)' : 'Database Not Found' ?> • 🕒 <?= date('d M Y, h:i A') ?> IST (UTC+5:30)</span>
            </div>
        </div>

        <div class="dash-actions">
            <button class="btn" onclick="location.reload()" title="Refresh Dashboard">🔄 Refresh</button>
            <a href="?action=export_csv" class="btn" title="Download CSV Log">📄 Export CSV</a>
            <a href="?action=download_db" class="btn btn-primary" title="Download SQLite Database">💾 Download DB</a>
            <a href="/app/" class="btn" target="_blank" title="Open Main App">🚀 Open App</a>
        </div>
    </header>

    <!-- Executive KPI Ribbon -->
    <section class="kpi-grid">
        <div class="kpi-card">
            <div class="kpi-title">Unique Machines (Hardware)</div>
            <div class="kpi-value"><?= number_format($kpis['machines']) ?></div>
            <div class="kpi-sub">Cross-browser invariant physical IDs</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-title">Total User Sessions</div>
            <div class="kpi-value"><?= number_format($kpis['sessions']) ?></div>
            <div class="kpi-sub"><?= number_format($kpis['events']) ?> total interactions</div>
        </div>
        <div class="kpi-card kpi-green">
            <div class="kpi-title">DXF CAD Uploads</div>
            <div class="kpi-value"><?= number_format($kpis['uploads']) ?></div>
            <div class="kpi-sub">Lifetime CAD files parsed</div>
        </div>
        <div class="kpi-card kpi-green">
            <div class="kpi-title">Quotes Generated</div>
            <div class="kpi-value"><?= number_format($kpis['quotes']) ?></div>
            <div class="kpi-sub"><?= number_format($kpis['pdf_quotes']) ?> Net 30 PDFs created</div>
        </div>
        <div class="kpi-card">
            <div class="kpi-title">2D Nesting & CAM Exports</div>
            <div class="kpi-value"><?= number_format($kpis['nesting_runs']) ?> / <?= number_format($kpis['dxf_exports']) ?></div>
            <div class="kpi-sub">Sheet nests / Trumpf & Amada DXFs</div>
        </div>
        <div class="kpi-card <?= $kpis['tool_errors'] > 0 ? 'kpi-warn' : '' ?>">
            <div class="kpi-title">Tool Errors / Health</div>
            <div class="kpi-value" style="color: <?= $kpis['tool_errors'] > 0 ? 'var(--accent-red)' : 'var(--accent-green)' ?>"><?= number_format($kpis['tool_errors']) ?></div>
            <div class="kpi-sub"><?= $kpis['tool_errors'] === 0 ? 'All tools running healthy' : 'Exceptions logged for triage' ?></div>
        </div>
    </section>

    <!-- Platform & Location Breakdown Ribbon -->
    <section class="platform-ribbon">
        <div class="platform-card">
            <div class="platform-header">
                <span>💻 Machine Type & Operating System</span>
                <span><?= count($machinesList) ?> Machines</span>
            </div>
            <div class="p-chips-row">
                <?php if (empty($osStats)): ?>
                    <span style="font-size:0.75rem; color: var(--text-muted);">Awaiting telemetry data...</span>
                <?php else: foreach ($osStats as $s): 
                    $icon = '💻';
                    if (stripos($s['name'], 'Windows') !== false) $icon = '🪟';
                    elseif (stripos($s['name'], 'macOS') !== false || stripos($s['name'], 'Mac') !== false) $icon = '🍎';
                    elseif (stripos($s['name'], 'Linux') !== false) $icon = '🐧';
                    elseif (stripos($s['name'], 'iOS') !== false) $icon = '📱';
                    elseif (stripos($s['name'], 'Android') !== false) $icon = '🤖';
                ?>
                    <div class="p-chip">
                        <span><?= $icon ?> <?= htmlspecialchars($s['name']) ?>:</span>
                        <span class="p-chip-cnt"><?= $s['count'] ?></span>
                    </div>
                <?php endforeach; endif; ?>
            </div>
        </div>

        <div class="platform-card">
            <div class="platform-header">
                <span>📱 Form Factor</span>
                <span>Device Types</span>
            </div>
            <div class="p-chips-row">
                <?php if (empty($deviceStats)): ?>
                    <span style="font-size:0.75rem; color: var(--text-muted);">Awaiting telemetry data...</span>
                <?php else: foreach ($deviceStats as $d): 
                    $dIcon = ($d['name'] === 'Mobile') ? '📱' : (($d['name'] === 'Tablet') ? '📟' : '🖥️');
                ?>
                    <div class="p-chip">
                        <span><?= $dIcon ?> <?= htmlspecialchars($d['name']) ?>:</span>
                        <span class="p-chip-cnt"><?= $d['count'] ?></span>
                    </div>
                <?php endforeach; endif; ?>
            </div>
        </div>

        <div class="platform-card">
            <div class="platform-header">
                <span>🌍 Top Locations & Timezones</span>
                <span>Geographic Reach</span>
            </div>
            <div class="p-chips-row">
                <?php if (empty($locationStats)): ?>
                    <span style="font-size:0.75rem; color: var(--text-muted);">Awaiting location data...</span>
                <?php else: foreach ($locationStats as $l): ?>
                    <div class="p-chip">
                        <span><?= htmlspecialchars($l['name']) ?>:</span>
                        <span class="p-chip-cnt"><?= $l['count'] ?></span>
                    </div>
                <?php endforeach; endif; ?>
            </div>
        </div>
    </section>

    <!-- Conversion Funnel -->
    <section class="funnel-card">
        <div class="section-header">
            <div class="section-title">📊 Quoting Conversion Funnel</div>
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent-green);">Upload-to-Quote Conversion: <?= $kpis['conversion_rate'] ?></div>
        </div>
        <div class="funnel-steps">
            <div class="funnel-step">
                <div class="funnel-step-num">STEP 1</div>
                <div class="funnel-step-name">Visits</div>
                <div class="funnel-step-val"><?= number_format($kpis['sessions']) ?></div>
            </div>
            <div class="funnel-step">
                <div class="funnel-step-num">STEP 2</div>
                <div class="funnel-step-name">CAD Uploads</div>
                <div class="funnel-step-val"><?= number_format($kpis['uploads']) ?></div>
            </div>
            <div class="funnel-step">
                <div class="funnel-step-num">STEP 3</div>
                <div class="funnel-step-name">2D Nesting</div>
                <div class="funnel-step-val"><?= number_format($kpis['nesting_runs']) ?></div>
            </div>
            <div class="funnel-step">
                <div class="funnel-step-num">STEP 4</div>
                <div class="funnel-step-name">Quotes Viewed</div>
                <div class="funnel-step-val"><?= number_format($kpis['quotes']) ?></div>
            </div>
            <div class="funnel-step">
                <div class="funnel-step-num">STEP 5</div>
                <div class="funnel-step-name">PDF / CAM DXF</div>
                <div class="funnel-step-val"><?= number_format($kpis['pdf_quotes'] + $kpis['dxf_exports']) ?></div>
            </div>
        </div>
    </section>

    <!-- Tabs Navigation -->
    <nav class="dash-tabs">
        <button class="tab-btn active" onclick="switchTab('machines')">
            👥 Unique Physical Machines <span class="tab-badge"><?= count($machinesList) ?></span>
        </button>
        <button class="tab-btn" onclick="switchTab('live-events')">
            ⚡ Live Event Feed <span class="tab-badge"><?= count($recentEvents) ?></span>
        </button>
        <button class="tab-btn" onclick="switchTab('errors')">
            ⚠️ Tool Error Center <span class="tab-badge <?= count($recentErrors) > 0 ? 'badge-error' : '' ?>"><?= count($recentErrors) ?></span>
        </button>
    </nav>

    <!-- Tab 1: Physical Machines Inspector -->
    <div id="tab-machines" class="tab-panel active">
        <div class="table-filter-bar">
            <input type="text" class="search-input" placeholder="Search Machine ID, OS, Location..." onkeyup="filterTable('table-machines-body', this.value)">
            <span style="font-size: 0.75rem; color: var(--text-muted);">Tracking physical hardware, operating systems, locations, and lifetime usage frequency</span>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Machine ID</th>
                        <th>Intent Tier</th>
                        <th>OS & Device Type</th>
                        <th>Location</th>
                        <th>Uploads</th>
                        <th>Quotes</th>
                        <th>PDFs</th>
                        <th>Nesting</th>
                        <th>Exports</th>
                        <th>Errors</th>
                        <th>Hardware Specs (GPU / CPU / Screen)</th>
                        <th>Known Browsers</th>
                        <th>Last Active (IST)</th>
                    </tr>
                </thead>
                <tbody id="table-machines-body">
                    <?php if (empty($machinesList)): ?>
                        <tr><td colspan="13" style="text-align:center; padding: 2rem; color: var(--text-muted);">No machines recorded yet. Upload a DXF in the app to begin tracking.</td></tr>
                    <?php else: foreach ($machinesList as $m): 
                        // Determine Intent Tier
                        $tierClass = 'tier-visitor';
                        $tierLabel = 'First Visit';
                        if ($m['upload_count'] >= 3 && $m['quote_generate_count'] >= 2) {
                            $tierClass = 'tier-hot';
                            $tierLabel = '🌟 Hot Lead';
                        } elseif ($m['pdf_download_count'] > 0 || $m['quote_generate_count'] > 0) {
                            $tierClass = 'tier-high';
                            $tierLabel = '⚡ High Intent';
                        } elseif ($m['upload_count'] >= 2 || $m['nesting_run_count'] > 0) {
                            $tierClass = 'tier-active';
                            $tierLabel = '🔍 Active Explorer';
                        }
                    ?>
                        <tr>
                            <td><span class="code-pill"><?= htmlspecialchars($m['machine_id']) ?></span></td>
                            <td><span class="tier-badge <?= $tierClass ?>"><?= $tierLabel ?></span></td>
                            <td><?= formatOSPill($m['os_name'] ?? 'Unknown', $m['device_type'] ?? 'Desktop') ?></td>
                            <td>
                                <span class="loc-pill" title="<?= htmlspecialchars($m['timezone'] ?? '') ?>">
                                    <?= htmlspecialchars($m['location_display'] ?? ($m['timezone'] ?? 'UTC')) ?>
                                </span>
                            </td>
                            <td style="font-weight: 700; color: #38bdf8;"><?= $m['upload_count'] ?></td>
                            <td style="font-weight: 700; color: #22c55e;"><?= $m['quote_generate_count'] ?></td>
                            <td><?= $m['pdf_download_count'] ?></td>
                            <td><?= $m['nesting_run_count'] ?></td>
                            <td><?= $m['dxf_export_count'] ?></td>
                            <td style="color: <?= $m['error_count'] > 0 ? '#ef4444' : 'inherit' ?>"><?= $m['error_count'] ?></td>
                            <td style="max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="<?= htmlspecialchars(($m['gpu_renderer'] ?? '') . ' | ' . ($m['cpu_cores'] ?? '') . ' Cores | ' . ($m['screen_res'] ?? '')) ?>">
                                <?= htmlspecialchars(($m['gpu_renderer'] ?? 'Unknown GPU') . ' (' . ($m['cpu_cores'] ?? '?') . 'C, ' . ($m['screen_res'] ?? '?') . ')') ?>
                            </td>
                            <td><span class="code-pill"><?= htmlspecialchars($m['known_browsers'] ?? '[]') ?></span></td>
                            <td style="white-space: nowrap; color: var(--text-muted); font-size: 0.72rem;"><?= formatISTDate($m['last_seen_at']) ?></td>
                        </tr>
                    <?php endforeach; endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Tab 2: Live Event Feed -->
    <div id="tab-live-events" class="tab-panel">
        <div class="table-filter-bar">
            <input type="text" class="search-input" placeholder="Search event, file, machine..." onkeyup="filterTable('table-events-body', this.value)">
            <select class="search-input" style="width: 140px;" onchange="filterCategory(this.value)">
                <option value="">All Categories</option>
                <option value="CAD">CAD</option>
                <option value="PRICING">PRICING</option>
                <option value="NESTING">NESTING</option>
                <option value="CONVERSION">CONVERSION</option>
                <option value="ERROR">ERROR</option>
            </select>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Event</th>
                        <th>Category</th>
                        <th>Machine ID</th>
                        <th>OS & Device</th>
                        <th>Location</th>
                        <th>Seq #</th>
                        <th>Lifetime Uploads</th>
                        <th>Created At (IST)</th>
                        <th>Payload Details</th>
                    </tr>
                </thead>
                <tbody id="table-events-body">
                    <?php if (empty($recentEvents)): ?>
                        <tr><td colspan="10" style="text-align:center; padding: 2rem; color: var(--text-muted);">No events recorded yet.</td></tr>
                    <?php else: foreach ($recentEvents as $e): ?>
                        <tr data-category="<?= htmlspecialchars($e['category']) ?>">
                            <td>#<?= $e['id'] ?></td>
                            <td style="font-weight: 700; color: #fff; font-family: var(--font-mono);"><?= htmlspecialchars($e['event_name']) ?></td>
                            <td><span class="cat-tag cat-<?= htmlspecialchars($e['category']) ?>"><?= htmlspecialchars($e['category']) ?></span></td>
                            <td><span class="code-pill"><?= htmlspecialchars($e['machine_id']) ?></span></td>
                            <td><?= formatOSPill($e['os_name'] ?? 'Unknown', $e['device_type'] ?? 'Desktop') ?></td>
                            <td><span class="loc-pill"><?= htmlspecialchars($e['location_display'] ?? '') ?></span></td>
                            <td>#<?= $e['session_event_seq'] ?></td>
                            <td><?= $e['lifetime_upload_count'] ?></td>
                            <td style="white-space: nowrap; color: var(--text-muted); font-size: 0.72rem;"><?= formatISTDate($e['created_at']) ?></td>
                            <td>
                                <button class="btn" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;" onclick='openPayloadModal(<?= json_encode($e['payload']) ?>, "<?= htmlspecialchars($e['event_name']) ?>")'>🔍 View JSON</button>
                            </td>
                        </tr>
                    <?php endforeach; endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Tab 3: Tool Error Center -->
    <div id="tab-errors" class="tab-panel">
        <div class="table-filter-bar">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--accent-red);">Tool & Runtime Diagnostics Console</span>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Error Type</th>
                        <th>Machine ID</th>
                        <th>OS & Device</th>
                        <th>Context / Message</th>
                        <th>Occurred At (IST)</th>
                        <th>Full Diagnostic</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($recentErrors)): ?>
                        <tr><td colspan="7" style="text-align:center; padding: 2rem; color: var(--accent-green);">🎉 Zero tool errors detected! All modules are functioning normally.</td></tr>
                    <?php else: foreach ($recentErrors as $err): ?>
                        <tr>
                            <td>#<?= $err['id'] ?></td>
                            <td><span class="cat-tag cat-ERROR"><?= htmlspecialchars($err['event_name']) ?></span></td>
                            <td><span class="code-pill"><?= htmlspecialchars($err['machine_id']) ?></span></td>
                            <td><?= formatOSPill($err['os_name'] ?? 'Unknown', $err['device_type'] ?? 'Desktop') ?></td>
                            <td style="max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: var(--font-mono); font-size: 0.72rem;">
                                <?= htmlspecialchars($err['payload']) ?>
                            </td>
                            <td style="white-space: nowrap; color: var(--text-muted); font-size: 0.72rem;"><?= formatISTDate($err['created_at']) ?></td>
                            <td>
                                <button class="btn btn-danger" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;" onclick='openPayloadModal(<?= json_encode($err['payload']) ?>, "<?= htmlspecialchars($err['event_name']) ?>")'>⚠️ Inspect Trace</button>
                            </td>
                        </tr>
                    <?php endforeach; endif; ?>
                </tbody>
            </table>
        </div>
    </div>

    <!-- JSON Payload Modal -->
    <div id="payloadModal" class="modal-overlay" onclick="closeModal(event)">
        <div class="modal-box" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h3 id="modalTitle" style="font-size: 0.95rem; font-family: var(--font-mono);">Event Payload</h3>
                <button class="btn" onclick="closeModal()">✕</button>
            </div>
            <pre id="modalContent" class="modal-pre"></pre>
        </div>
    </div>

    <script>
        function switchTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            event.currentTarget.classList.add('active');
            const target = document.getElementById('tab-' + tabId);
            if (target) target.classList.add('active');
        }

        function filterTable(tbodyId, query) {
            const rows = document.querySelectorAll('#' + tbodyId + ' tr');
            const q = query.toLowerCase();
            rows.forEach(r => {
                const text = r.textContent.toLowerCase();
                r.style.display = text.includes(q) ? '' : 'none';
            });
        }

        function filterCategory(cat) {
            const rows = document.querySelectorAll('#table-events-body tr');
            rows.forEach(r => {
                if (!cat) {
                    r.style.display = '';
                    return;
                }
                const rCat = r.getAttribute('data-category');
                r.style.display = (rCat === cat) ? '' : 'none';
            });
        }

        function openPayloadModal(payloadRaw, title) {
            const modal = document.getElementById('payloadModal');
            const pre = document.getElementById('modalContent');
            const titleEl = document.getElementById('modalTitle');
            titleEl.textContent = 'Event Trace: ' + title;

            try {
                let parsed = (typeof payloadRaw === 'string') ? JSON.parse(payloadRaw) : payloadRaw;
                pre.textContent = JSON.stringify(parsed, null, 2);
            } catch (e) {
                pre.textContent = payloadRaw || '{}';
            }
            modal.classList.add('open');
        }

        function closeModal(e) {
            if (e && e.target && e.target.closest && e.target.closest('.modal-box') && !e.target.closest('.modal-header button')) {
                return;
            }
            document.getElementById('payloadModal').classList.remove('open');
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    </script>
</body>
</html>

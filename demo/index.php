<?php
// ====================================================================
// SheetTally - Clean Demo Redirect & Tracker (SQLite)
// Accessible as: https://sheetdxf.com/demo
// (No parameters, no .php in URL, 100% natural)
// ====================================================================

// Record click directly into SQLite database
$db_dir = __DIR__ . '/../data';
$db_file = $db_dir . '/analytics.sqlite';

$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] 
    ?? $_SERVER['HTTP_X_REAL_IP'] 
    ?? $_SERVER['HTTP_X_FORWARDED_FOR'] 
    ?? $_SERVER['REMOTE_ADDR'] 
    ?? '127.0.0.1';

if (strpos($ip, ',') !== false) {
    $ip = trim(explode(',', $ip)[0]);
}

$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
$bot_pattern = '/(bot|crawl|slurp|spider|facebook|twitter|linkedin|preview|curl|wget)/i';

if (!preg_match($bot_pattern, $user_agent)) {
    $device = preg_match('/(mobi|iphone|ipad|android)/i', $user_agent) ? 'Mobile/Tablet' : 'Desktop';
    $city = null;
    $region = null;
    $country = null;
    $isp_org = null;

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
        if (!is_dir($db_dir)) {
            @mkdir($db_dir, 0755, true);
        }
        $pdo = new PDO('sqlite:' . $db_file);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
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

        $stmt = $pdo->prepare("
            INSERT INTO visits (source, city, region, country, isp_org, device, ip, user_agent)
            VALUES (:source, :city, :region, :country, :isp_org, :device, :ip, :user_agent)
        ");
        $stmt->execute([
            ':source' => 'demo',
            ':city' => $city,
            ':region' => $region,
            ':country' => $country,
            ':isp_org' => $isp_org,
            ':device' => $device,
            ':ip' => $ip,
            ':user_agent' => substr($user_agent, 0, 255)
        ]);
    } catch (Exception $e) {
        // Silently proceed
    }
}

// Redirect instantly to root application
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Location: https://sheetdxf.com/");
exit;

<?php
/**
 * SheetDXF RFQ submission endpoint.
 *
 * Receives a customer RFQ (multipart: `payload` JSON + one or more `dxf[]` files),
 * stores it on the server, and emails it to the shop over SMTP (PHPMailer).
 *
 * The recipient is ALWAYS resolved server-side from shops.json (or RFQ_DEFAULT_TO),
 * never from the browser, so this endpoint cannot be used to mail arbitrary addresses.
 *
 * Environment (set via Hostinger env / .htaccess SetEnv):
 *   SMTP_HOST, SMTP_PORT (587), SMTP_SECURE (tls|ssl), SMTP_USER, SMTP_PASS
 *   MAIL_FROM, MAIL_FROM_NAME
 *   RFQ_DEFAULT_TO      fallback recipient when shopId is unknown (your own inbox)
 *   RFQ_BCC             optional, copy every RFQ to you
 *   RFQ_STORAGE_DIR     optional, defaults to api/data/rfq (blocked from web access)
 *   RFQ_SHOPS_FILE      optional, defaults to api/config/shops.json
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const MAX_DXF_BYTES   = 5 * 1024 * 1024;   // per file
const MAX_FILES       = 10;
const MAX_TOTAL_BYTES = 12 * 1024 * 1024;
const RATE_PER_10MIN  = 5;                 // per IP
const RATE_PER_DAY    = 30;                // per IP

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

function env(string $key, string $default = ''): string {
    foreach ([getenv($key), $_SERVER[$key] ?? null, $_ENV[$key] ?? null, $_SERVER['REDIRECT_' . $key] ?? null] as $v) {
        if (is_string($v) && $v !== '') return $v;
    }
    return $default;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// ── Same-site only (widget iframe is served from this origin) ───────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST) ?: '';
    $selfHost = $_SERVER['HTTP_HOST'] ?? '';
    $selfHost = preg_replace('/:\d+$/', '', $selfHost);
    if (strcasecmp($originHost, $selfHost) !== 0) {
        respond(403, ['ok' => false, 'error' => 'Forbidden origin']);
    }
}

// ── Basic validation ────────────────────────────────────────────────────────
if (!empty($_POST['website'] ?? '')) {      // honeypot: humans leave it empty
    respond(200, ['ok' => true, 'id' => 'ignored']);
}

$payload = json_decode((string)($_POST['payload'] ?? ''), true);
if (!is_array($payload)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

$customer = is_array($payload['customer'] ?? null) ? $payload['customer'] : [];
$custEmail = trim((string)($customer['email'] ?? ''));
$custName  = trim((string)($customer['name'] ?? ''));
if (!filter_var($custEmail, FILTER_VALIDATE_EMAIL) || strlen($custEmail) > 200) {
    respond(400, ['ok' => false, 'error' => 'A valid email address is required.']);
}
$custName = mb_substr(preg_replace('/[\r\n]+/', ' ', $custName), 0, 120);

$shopId = preg_replace('/[^a-z0-9_-]/i', '', (string)($payload['shopId'] ?? ''));
$subject = mb_substr(preg_replace('/[\r\n]+/', ' ', (string)($payload['subject'] ?? 'Manufacturing RFQ')), 0, 200);
$rfqText = mb_substr((string)($payload['rfqText'] ?? ''), 0, 60000);
if ($rfqText === '') {
    respond(400, ['ok' => false, 'error' => 'Empty RFQ']);
}

// ── Rate limiting (file based, per IP) ──────────────────────────────────────
$storageDir = env('RFQ_STORAGE_DIR', __DIR__ . '/data/rfq');
$limitDir = $storageDir . '/_limits';
if (!is_dir($limitDir)) @mkdir($limitDir, 0750, true);
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$limitFile = $limitDir . '/' . hash('sha256', $ip) . '.json';
$now = time();
$hits = [];
if (is_file($limitFile)) {
    $hits = json_decode((string)@file_get_contents($limitFile), true) ?: [];
}
$hits = array_values(array_filter($hits, fn($t) => is_int($t) && $t > $now - 86400));
$recent = count(array_filter($hits, fn($t) => $t > $now - 600));
if ($recent >= RATE_PER_10MIN || count($hits) >= RATE_PER_DAY) {
    respond(429, ['ok' => false, 'error' => 'Too many submissions. Please try again later.']);
}

// ── Collect DXF uploads ─────────────────────────────────────────────────────
$files = [];
$total = 0;
if (isset($_FILES['dxf'])) {
    $f = $_FILES['dxf'];
    $names = is_array($f['name']) ? $f['name'] : [$f['name']];
    $tmps  = is_array($f['tmp_name']) ? $f['tmp_name'] : [$f['tmp_name']];
    $errs  = is_array($f['error']) ? $f['error'] : [$f['error']];
    $sizes = is_array($f['size']) ? $f['size'] : [$f['size']];
    if (count($names) > MAX_FILES) {
        respond(400, ['ok' => false, 'error' => 'Too many files.']);
    }
    foreach ($names as $i => $orig) {
        if ($errs[$i] === UPLOAD_ERR_NO_FILE) continue;
        if ($errs[$i] !== UPLOAD_ERR_OK || !is_uploaded_file($tmps[$i])) {
            respond(400, ['ok' => false, 'error' => 'File upload failed.']);
        }
        if ($sizes[$i] > MAX_DXF_BYTES) {
            respond(413, ['ok' => false, 'error' => 'DXF file is too large (5 MB max).']);
        }
        $total += $sizes[$i];
        $safe = preg_replace('/[^A-Za-z0-9._-]/', '_', basename((string)$orig));
        if (!preg_match('/\.dxf$/i', $safe)) {
            respond(400, ['ok' => false, 'error' => 'Only .dxf files are accepted.']);
        }
        $head = (string)file_get_contents($tmps[$i], false, null, 0, 4096);
        if (stripos($head, 'SECTION') === false && stripos($head, 'ENTITIES') === false) {
            respond(400, ['ok' => false, 'error' => 'File does not look like a DXF.']);
        }
        $files[] = ['tmp' => $tmps[$i], 'name' => $safe];
    }
    if ($total > MAX_TOTAL_BYTES) {
        respond(413, ['ok' => false, 'error' => 'Files are too large.']);
    }
}

// ── Resolve recipient server-side ───────────────────────────────────────────
$shopsFile = env('RFQ_SHOPS_FILE', __DIR__ . '/config/shops.json');
$shopEmail = '';
$shopName = '';
if ($shopId !== '' && is_file($shopsFile)) {
    $shops = json_decode((string)file_get_contents($shopsFile), true);
    if (is_array($shops) && isset($shops[$shopId])) {
        $entry = $shops[$shopId];
        $shopEmail = is_array($entry) ? (string)($entry['email'] ?? '') : (string)$entry;
        $shopName  = is_array($entry) ? (string)($entry['name'] ?? '') : '';
    }
}
if (!filter_var($shopEmail, FILTER_VALIDATE_EMAIL)) {
    $shopEmail = env('RFQ_DEFAULT_TO');
}
if (!filter_var($shopEmail, FILTER_VALIDATE_EMAIL)) {
    error_log('[submit_rfq] No recipient configured for shopId=' . $shopId);
    respond(500, ['ok' => false, 'error' => 'Shop email is not configured.']);
}

// ── Persist submission ──────────────────────────────────────────────────────
$id = date('Ymd-His') . '-' . bin2hex(random_bytes(4));
$subDir = $storageDir . '/' . $id;
if (!@mkdir($subDir, 0750, true) && !is_dir($subDir)) {
    error_log('[submit_rfq] Cannot create storage dir ' . $subDir);
    respond(500, ['ok' => false, 'error' => 'Server storage error.']);
}
$stored = [];
foreach ($files as $file) {
    $dest = $subDir . '/' . $file['name'];
    if (!move_uploaded_file($file['tmp'], $dest)) {
        respond(500, ['ok' => false, 'error' => 'Could not store file.']);
    }
    $stored[] = ['path' => $dest, 'name' => $file['name']];
}
file_put_contents($subDir . '/rfq.json', json_encode([
    'id' => $id, 'received_at' => date('c'), 'shopId' => $shopId, 'shopEmail' => $shopEmail,
    'customer' => $customer, 'subject' => $subject, 'rfqText' => $rfqText,
    'files' => array_column($stored, 'name'), 'ip_hash' => hash('sha256', $ip),
], JSON_PRETTY_PRINT));

// Count the attempt only after a valid, stored submission
$hits[] = $now;
@file_put_contents($limitFile, json_encode($hits), LOCK_EX);

// ── Send email via SMTP ─────────────────────────────────────────────────────
$vendor = __DIR__ . '/vendor/autoload.php';
if (is_file($vendor)) {
    require $vendor;
} else {
    require __DIR__ . '/lib/PHPMailer/Exception.php';
    require __DIR__ . '/lib/PHPMailer/PHPMailer.php';
    require __DIR__ . '/lib/PHPMailer/SMTP.php';
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

function build_mailer(): PHPMailer {
    $m = new PHPMailer(true);
    $m->isSMTP();
    $m->Host = env('SMTP_HOST');
    $m->Port = (int)env('SMTP_PORT', '587');
    $m->SMTPAuth = true;
    $m->Username = env('SMTP_USER');
    $m->Password = env('SMTP_PASS');
    $secure = strtolower(env('SMTP_SECURE', 'tls'));
    $m->SMTPSecure = $secure === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $m->Timeout = 15;
    $m->CharSet = 'UTF-8';
    $from = env('MAIL_FROM', env('SMTP_USER'));
    $m->setFrom($from, env('MAIL_FROM_NAME', 'SheetDXF Quotes'));
    return $m;
}

try {
    $mail = build_mailer();
    $mail->addAddress($shopEmail, $shopName);
    $mail->addReplyTo($custEmail, $custName);          // shop's "Reply" goes to the customer
    $bcc = env('RFQ_BCC');
    if (filter_var($bcc, FILTER_VALIDATE_EMAIL)) $mail->addBCC($bcc);
    $mail->Subject = $subject;
    $mail->Body = $rfqText . "\n\n(RFQ ID: {$id} — sent via SheetDXF. Reply to this email to contact the customer.)";
    $mail->isHTML(false);
    foreach ($stored as $s) $mail->addAttachment($s['path'], $s['name']);
    $mail->send();
} catch (MailException $e) {
    error_log('[submit_rfq] SMTP send failed for ' . $id . ': ' . $e->getMessage());
    file_put_contents($subDir . '/send_failed.txt', date('c') . "\n" . $e->getMessage());
    respond(502, ['ok' => false, 'id' => $id, 'error' => 'Could not send email. Please try again or contact the shop directly.']);
}

// Customer confirmation copy (best effort, never fails the request)
try {
    $conf = build_mailer();
    $conf->addAddress($custEmail, $custName);
    $conf->Subject = 'Your quote request was sent: ' . $subject;
    $conf->Body = "Hi " . ($custName ?: 'there') . ",\n\nYour request was sent to " . ($shopName ?: 'the shop') .
        ". They will reply to this email address.\n\n--- Copy of your request ---\n\n" . $rfqText;
    $conf->isHTML(false);
    $conf->send();
} catch (MailException $e) {
    error_log('[submit_rfq] Confirmation copy failed for ' . $id . ': ' . $e->getMessage());
}

respond(200, ['ok' => true, 'id' => $id]);

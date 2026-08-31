<?php
header('Content-Type: application/json');

// mail-config.php and mail-lib.php live outside the web root (one level above
// this domain's document root) so the Resend API key is never web-accessible.
require_once dirname(dirname(__DIR__)) . '/mail-config.php';
require_once dirname(dirname(__DIR__)) . '/mail-lib.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

// Both the careers hero "Quick Connect" form (name, email, phone, optional
// resume file) and the "Connect With Us" form (name, email, optional message)
// post here as multipart/form-data.
if (!empty($_POST['bot_field'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Spam detected.']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');
$attachments = [];

if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $maxSize = 5 * 1024 * 1024; // 5MB, matches the client-side limit
    if ($_FILES['resume']['size'] <= $maxSize) {
        $attachments[] = [
            'filename' => basename($_FILES['resume']['name']),
            'content' => base64_encode(file_get_contents($_FILES['resume']['tmp_name'])),
        ];
    }
}

if ($name === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Name and email are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid email address.']);
    exit;
}

$body = "New career inquiry from the Amigosia website\n\n"
      . "Name: {$name}\n"
      . "Email: {$email}\n"
      . ($phone !== '' ? "Phone: {$phone}\n" : '')
      . "\nMessage / Note:\n" . ($message !== '' ? $message : 'No message provided.');

$sent = send_via_resend(
    subject: "New Career Inquiry from {$name}",
    text: $body,
    replyTo: $email,
    attachments: $attachments
);

if (!$sent) {
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send message. Please try again later.']);
    exit;
}

echo json_encode(['success' => true]);

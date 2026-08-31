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

if (!empty($_POST['bot_field'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Spam detected.']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$company = trim($_POST['company'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid email address.']);
    exit;
}

$body = "New contact form submission from the Amigosia website\n\n"
      . "Name: {$name}\n"
      . "Email: {$email}\n"
      . "Company: " . ($company !== '' ? $company : 'N/A') . "\n\n"
      . "Message:\n{$message}";

$sent = send_via_resend(
    subject: "New Contact Form Submission from {$name}",
    text: $body,
    replyTo: $email
);

if (!$sent) {
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send message. Please try again later.']);
    exit;
}

echo json_encode(['success' => true]);

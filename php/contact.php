<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $service === '' || $message === '') {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

/*
  Change this to your real business email before deployment.
  For production, SMTP (e.g. PHPMailer) is recommended over PHP mail().
*/
$to = '3xcode.official@gmail.com';
$subject = 'New 3xCode Project Inquiry — ' . $service;

$body = "New project inquiry\n\n"
      . "Name: $name\n"
      . "Email: $email\n"
      . "Phone: $phone\n"
      . "Service: $service\n\n"
      . "Message:\n$message\n";

$headers = "From: 3xCode Website <no-reply@3xcode.com>\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Thanks! Your inquiry has been sent.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Email could not be sent from the server.']);
}
?>

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use Dotenv\Dotenv;

require '../vendor/autoload.php';

$dotenv = Dotenv::createImmutable('../');
$dotenv->load();

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$recaptcha_response = $_POST['g-recaptcha-response'];

if (!$name) {
  echo 'Please provide your name.';
  exit;
}

if (!$email) {
  echo 'Please provide your email address.';
  exit;
}

if (!$message) {
  echo 'Please provide a message with your email.';
  exit;
}

if (!$recaptcha_response) {
  echo 'Please check the reCAPTCHA checkbox.';
  exit;
}

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = $_ENV['EMAIL_HOST'];
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = $_ENV['EMAIL_PORT'];
$mail->Username = $_ENV['EMAIL_USERNAME'];
$mail->Password = $_ENV['EMAIL_PASSWORD'];
$mail->setFrom($email, $name);
$mail->addAddress($_ENV['EMAIL_TO_ADDRESS']);
$mail->Subject = $_ENV['EMAIL_SUBJECT'];
$mail->Body = $message;

$mail->send();

header("Location: email-sent.html");

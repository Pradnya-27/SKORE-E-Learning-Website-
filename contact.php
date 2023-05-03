<?php
if ($_SERVER['REQUEST_METHOD'] === 'post') {
	$name = $_POST['name'];
	$yemail = $_POST['yemail'];
    $email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$to = 'recipient@example.com';
	$headers = "From: $name <$email>" . "\r\n";
	$headers .= "Reply-To: $yemail" . "\r\n";
	$headers .= "X-Mailer: PHP/" . phpversion();

	if (mail($to, $subject, $message, $headers)) {
		echo json_encode(['success' => true]);
	} else {
		echo json_encode(['success' => false]);
	}
}
?>

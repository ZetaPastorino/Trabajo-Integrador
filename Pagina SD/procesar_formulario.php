<?php

ini_set('SMTP', 'smtp.gmail.com');
ini_set('smtp_port', 587);
ini_set('username', 'proyectos.web.mj@gmail.com');
ini_set('password', 'ProyectosVarios');

// Recibir datos del formulario

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


// Realizar las operaciones necesarias con los datos recibidos, por ejemplo, enviarlos por correo electrónico, almacenarlos en una base de datos, etc.

// Borrar los datos una vez que sean enviados
$name = '';
$email = '';
$subject = '';
$message = '';

// Redirigir a una página de éxito o mostrar un mensaje de éxito en la misma página del formulario
header('Location: formulario_exitoso.php');
exit();

$to = "destinatario@example.com";
$subject = "Mensaje de contacto";
$message = "Nombre: " . $name . "\n";
$message .= "Email: " . $email . "\n";
$message .= "Asunto: " . $subject . "\n";
$message .= "Mensaje: " . $message . "\n";
$headers = "From: " . $email . "\r\n" .
    "Reply-To: " . $email . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);
?>

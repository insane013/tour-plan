<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$sub = false;


if (isset($_POST['sub'])) {
    $sub = true;
}

if ($sub) {
    $body = "
    <h2>Новая подписка</h2>
    <b>Почта:</b> $email
    ";
} else {
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'insane013.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'best-tour-plan@insane013.ru'; // Логин на почте
    $mail->Password   = '***'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('best-tour-plan@insane013.ru', 'Tour-plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('marsel092002@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


// Отображение результата
if ($sub == false){
    header('Location: thanks.html');
} else {
    header('Location: thanks-subscribe.html');
}
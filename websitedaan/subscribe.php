<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    if ($email) {
        file_put_contents('subscribers.txt', $email . PHP_EOL, FILE_APPEND);
        header('Location: index.html?subscribed=success');
        exit;
    } else {
        header('Location: index.html?subscribed=error');
        exit;
    }
}
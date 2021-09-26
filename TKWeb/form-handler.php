<?php

if (!empty($_POST['name']) && $_POST['email'] && $_POST['message'])
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // $email_from = '';
    $email_subject = "New Form Submission from Contact page";
    $email_body = "User Name: $name\n".
                    "User Email: $visitor_email\n".
                            "Subject: $subject\n".
                                "User Message: $message\n";
    $to = "maxdolski@gmail.com";
    $headers = "From: $visitor_email\r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: contact(has-sent).html");


?> 


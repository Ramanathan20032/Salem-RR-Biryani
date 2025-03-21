<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Your existing variables
    $first_name = $_POST["first-name"];
    $last_name = $_POST["last-name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $enquiry = $_POST["enquiry"];

  
    // Proceed with email creation and sending as in your original code
    $mailx = "<html><head><title>Salem RR Biryani</title></head><body>";
    $mailx .= "<table cellpadding=5 cellspacing=5><tr><td colspan=2 align=center><b>General Enquiry through your company name Website</b></td></tr>";
    $mailx .= "<tr><td><b>First Name</td><td>:</b></td><td>" . $first_name . "</td></tr>";
    $mailx .= "<tr><td><b>Last Name</td><td>:</b></td><td>" . $last_name . "</td></tr>";
    $mailx .= "<tr><td><b>Phone Number</td><td>:</b></td><td>" . $phone . "</td></tr>";
    $mailx .= "<tr><td><b>Email</td><td>:</b></td><td>" . $email . "</td></tr>";
    $mailx .= "<tr><td><b>Message</td><td>:</b></td><td>" . $enquiry . "</td></tr>";
    $mailx .= "<tr><td colspan=2 align=center><b>--------------------</b></td></tr>";
    $mailx .= "<tr><td colspan=2><hr></td></tr></table></body></html>";

    $sbj = "Salem RR Biryani";
    $headers = 'From: ramanathan20032@gmail.com' . "\r\n" .
        'Reply-To: ramanathan20032@gmail.com' . "\r\n" .
        'Bcc: ramanathan20032@gmail.com' . "\r\n" .
        'MIME-Version: 1.0' . "\r\n" .
        'Content-type: text/html; charset=iso-8859-1' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $headers1 = 'From: ramanathan20032@gmail.com' . "\r\n" .
        'Reply-To: ramanathan20032@gmail.com' . "\r\n" .
        'MIME-Version: 1.0' . "\r\n" .
        'Content-type: text/html; charset=iso-8859-1' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $emVal = "ramanathan20032@gmail.com";
    $maily = "<html><head><title>your company name</title></head><body>";
    $maily .= "<table cellpadding=5 cellspacing=5><tr><td><b>Address</td><td>:</b></td><td><b>your company name</b><br>office address</td></tr>";
    $maily .= "<tr><td><b>Email</td><td>:</b></td><td>sales@gmail.com,<br>sales@gmail.com</td></tr>";
    $maily .= "<tr><td><b>Website</td><td>:</b></td><td>www.yourdetails.com</td></tr></table></body></html>";

    $mailFunc = mail($emVal, $sbj, $mailx, $headers);
    $mailFunc = mail($email, "Thank you for choosing The your company name.", $maily, $headers1);

    if ($mailFunc) {
        header("Location: reachus.html");
    } else {
        echo "Mail not sent.";
    }
}
?>
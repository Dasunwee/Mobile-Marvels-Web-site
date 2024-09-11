<?php
session_start();

// Database connection
$conn = new mysqli('localhost', 'root', '', 'mobilemarvels');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    echo "Database connection successful.<br>";
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form data
    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $address = isset($_POST['address']) ? $_POST['address'] : '';
    $city = isset($_POST['city']) ? $_POST['city'] : '';
    $province = isset($_POST['province']) ? $_POST['province'] : ''; // Corrected to match form
    $zip = isset($_POST['zip']) ? $_POST['zip'] : '';
    $cardname = isset($_POST['cardname']) ? $_POST['cardname'] : '';
    $cardnumber = isset($_POST['cardnumber']) ? $_POST['cardnumber'] : '';
    $expmonth = isset($_POST['expmonth']) ? $_POST['expmonth'] : '';
    $expyear = isset($_POST['expyear']) ? $_POST['expyear'] : '';
    $cvv = isset($_POST['cvv']) ? $_POST['cvv'] : '';
    $sameadr = isset($_POST['sameadr']) ? $_POST['sameadr'] : '';

    // Validate form data
    if (!empty($firstname) && !empty($email) && !empty($address) && !empty($city) && !empty($province) && !empty($zip) && !empty($cardname) && !empty($cardnumber) && !empty($expmonth) && !empty($expyear) && !empty($cvv)) {
        // Insert order details into the database
        $stmt = $conn->prepare("INSERT INTO orders (fullname, email, address, city, province, zip, cardname, cardnumber, expmonth, expyear, cvv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssssss", $firstname, $email, $address, $city, $province, $zip, $cardname, $cardnumber, $expmonth, $expyear, $cvv);
        
        if ($stmt->execute()) {
            // Redirect to a thank you or confirmation page
            header("Location: thank_you.php");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Please fill in all the required fields.";
    }
}

$conn->close();
?>

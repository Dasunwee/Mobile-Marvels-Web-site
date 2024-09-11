<?php
session_start();

$conn = new mysqli('localhost', 'root', '', 'mobilemarvels');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    echo 'Connection successful';
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirmpassword = $_POST['confirmPassword'] ?? '';
    $country = $_POST['country'] ?? '';
    $nic = $_POST['nic'] ?? '';

    if (!empty($name) && !empty($phone) && !empty($username) && !empty($password) && !empty($confirmpassword) && !empty($country) && !empty($nic)) {
        if ($password === $confirmpassword) {
            // Check if the username already exists
            $stmt = $conn->prepare("SELECT username FROM reguser WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows > 0) {
                echo "Username already exists. Please choose a different username.";
            } else {
                // Hash the password
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                // Insert user data into the database
                $stmt = $conn->prepare("INSERT INTO reguser (fullname, mobile, username, password, country, nic) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("ssssss", $name, $phone, $username, $hashedPassword, $country, $nic);
                
                if ($stmt->execute()) {
                    // Redirect to the login page
                    header("Location: Loggin/loggin.html");
                    exit(); // Ensure no further code is executed
                } else {
                    echo "Insert Error: " . $stmt->error;
                }

                $stmt->close();
            }
        } else {
            echo "Passwords do not match.";
        }
    } else {
        echo "Please fill in all the required fields.";
    }
}

$conn->close();
?>

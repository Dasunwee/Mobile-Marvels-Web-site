<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection details
$servername = "localhost";
$username = "root";
$password = ""; // Database password
$dbname = "mobilemarvels"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected to the database successfully!<br>";
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $category = $_POST['category'];
    $product_name = $_POST['product_name'];
    $description = $_POST['description'];
    $original_price = $_POST['original_price'];
    $discount_price = $_POST['discount_price'];

    // Handle image upload
    $image = $_FILES['image']['name'];
    $target_dir = "uploads/";

    // Check if uploads directory exists, if not, create it
    if (!file_exists($target_dir)) {
        mkdir($target_dir, 0755, true);
    }

    $target_file = $target_dir . basename($image);

    // Check for file upload errors
    if ($_FILES['image']['error'] === UPLOAD_ERR_OK) {
        // Move the uploaded file to the target directory
        if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            // Prepare and execute SQL query
            $stmt = $conn->prepare("INSERT INTO products (category, product_name, description, original_price, discount_price, image_url) VALUES (?, ?, ?, ?, ?, ?)");

            // Check if the statement is properly prepared
            if ($stmt === false) {
                die("Error preparing the statement: " . $conn->error);
            }

            // Bind parameters to the statement
            if (!$stmt->bind_param("sssdss", $category, $product_name, $description, $original_price, $discount_price, $target_file)) {
                die("Error binding parameters: " . $stmt->error);
            }

            // Execute the prepared statement
            if ($stmt->execute()) {
                echo "New product added successfully!";
            } else {
                // Print SQL error message if the execution fails
                die("Error executing the statement: " . $stmt->error);
            }

            // Close the prepared statement
            $stmt->close();
        } else {
            echo "Error moving the uploaded file. Please check file permissions.";
        }
    } else {
        echo "File upload error: " . $_FILES['image']['error'];
    }
}

// Close the database connection
$conn->close();
?>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mobilemarvels";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if product_id is set
if (isset($_POST['product_id'])) {
    $product_id = $conn->real_escape_string($_POST['product_id']);

    // SQL delete query
    $sql = "DELETE FROM products WHERE id='$product_id'";

    if ($conn->query($sql) === TRUE) {
        echo "Product deleted successfully";
    } else {
        echo "Error deleting product: " . $conn->error;
    }
} else {
    echo "No product ID provided. Please enter a valid product ID.";
}

$conn->close();
?>

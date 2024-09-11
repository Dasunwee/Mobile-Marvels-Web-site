<?php
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

$product_id = $conn->real_escape_string($_GET['id']);
$sql = "SELECT * FROM products WHERE id='$product_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $product = $result->fetch_assoc();
} else {
    echo "Product not found.";
    exit();
}

$conn->close();
?>

<!-- Include the HTML form here or use an include to combine them -->
<?php include('update_products.html'); ?>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mobilemarvels";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$product_id = $conn->real_escape_string($_POST['product_id']);
$category = $conn->real_escape_string($_POST['category']);
$product_name = $conn->real_escape_string($_POST['product_name']);
$description = $conn->real_escape_string($_POST['description']);
$original_price = $conn->real_escape_string($_POST['original_price']);
$discount_price = $conn->real_escape_string($_POST['discount_price']);

// Handle image upload
$image_url = $_FILES['image']['name'];
$target_dir = "uploads/";
$target_file = $target_dir . basename($image_url);

if ($image_url) {
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        // New image uploaded
        $image_url = $target_file;
    } else {
        echo "Error uploading the image. Please try again.";
        exit();
    }
} else {
    // No new image uploaded, retain old image URL
    $sql = "SELECT image_url FROM products WHERE id='$product_id'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $image_url = $row['image_url'];
    }
}

// Debugging output
echo "<pre>";
echo "Product ID: $product_id\n";
echo "Category: $category\n";
echo "Product Name: $product_name\n";
echo "Description: $description\n";
echo "Original Price: $original_price\n";
echo "Discount Price: $discount_price\n";
echo "Image URL: $image_url\n";
echo "</pre>";

// Update SQL query
$sql = "UPDATE products SET 
        category='$category', 
        product_name='$product_name', 
        description='$description', 
        original_price='$original_price', 
        discount_price='$discount_price', 
        image_url='$image_url' 
        WHERE id='$product_id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>

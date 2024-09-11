<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mobilemarvels";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo '<div class="row">';
    while ($row = $result->fetch_assoc()) {
        echo '
        <div class="column ' . $row["category"] . ' show">
            <div class="content">
                <img src="' . $row["image_url"] . '" alt="' . $row["product_name"] . '">
                <h3>' . $row["product_name"] . '</h3>
                <p>' . $row["description"] . '</p>
                <p class="price">
                    <span class="original-price">රු:' . $row["original_price"] . '</span>
                    <span class="discount-price">රු:' . $row["discount_price"] . '</span>
                </p>
                <button onclick="addToCart(\'' . $row["product_name"] . '\', ' . $row["discount_price"] . ')">Add to Cart</button>
            </div>
        </div>';
    }
    echo '</div>';
} else {
    echo "No products found";
}

$conn->close();
?>

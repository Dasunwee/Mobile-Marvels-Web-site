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
}

// Query to fetch products
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

// Start HTML output
echo '<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="productsstyle.css">
    <title>Mobile Marvels</title>
    <link rel="icon" type="image/x-icon" href="/Images/Logos/Untitled-3.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
<div id="myNav" class="overlay">
        <div class="overlay-content">
            <a href="MobileMarvels/index.html">Home</a>
            <a href="MobileMarvels/Products/products.php">Products</a>
            <a href="MobileMarvels/Contact/contact.html">Contact Us</a>
            <a href="MobileMarvels/Aboutus/aboutus.html">About Us</a>
            <a href="MobileMarvels/Loggin/loggin.html">Login</a>
            <a href="MobileMarvels/Register/register.html">Register</a>
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times; Enter the website</a>
        </div>
    </div>
    
    <nav class="navbar" id="navbar">
        <span style="font-size:26px;cursor:pointer" onclick="openNav()">
            <i class="fas fa-home"></i> 
        </span>
        
        <div class="container">
            <a href="Images/Mobile Marvels (1).png" class="logo">Mobile Marvels</a>
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Search products..." onkeyup="searchFunction()">
                <button onclick="searchFunction()">
                    <i class="fa fa-search"></i> <!-- Modern search icon -->
                </button>
                <div class="cart-icon">
                    <button onclick="toggleCart()">
                        <i class="fa fa-shopping-cart"></i> <!-- Modern cart icon -->
                        <span id="cart-count" class="cart-count">0</span> <!-- Cart count -->
                    </button>
                </div>
                
               
            </div>
        </div>
    </nav>

    <div class="main">

        <h1>Products</h1>
        <div class="info-container">
          <p class="info-text">
            Compare the latest smartphones side by side to find the perfect device for your needs. Our detailed comparison tool allows you to evaluate key features, specifications, and user ratings for the phones
             you are interested in  Click the button below to start comparing and make an informed decision!
          </p>
          <div class="button-container">
            <a href="compare.html" class="comparison-button">Compare Phones</a>
          </div>
        </div>
        
        <hr>
        
        <h2>Categories</h2>
       <div id="myBtnContainer">
    <button class="btn active" onclick="filterSelection(\'all\')">Show all</button>
    <button class="btn" onclick="filterSelection(\'Iphones\')">Iphones</button>
    <button class="btn" onclick="filterSelection(\'Mac-Products\')">Mac Products</button>
    <button class="btn" onclick="filterSelection(\'Android-Phones\')">Android Phones</button>
    <button class="btn" onclick="filterSelection(\'Smart-Accessories\')">Smart Accessories</button>
</div>
<div class="row">';

// Check if there are results
if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo '<div class="column ' . htmlspecialchars($row["category"]) . ' show">
            <div class="content">
                <img src="' . htmlspecialchars($row["image_url"]) . '" alt="' . htmlspecialchars($row["product_name"]) . '">
                <h3>' . htmlspecialchars($row["product_name"]) . '</h3>
                <p>' . htmlspecialchars($row["description"]) . '</p>
                <p class="price">
                    <span class="original-price">රු:' . htmlspecialchars($row["original_price"]) . '</span>
                    <span class="discount-price">රු:' . htmlspecialchars($row["discount_price"]) . '</span>
                </p>
                <button onclick="addToCart(\'' . htmlspecialchars($row["product_name"]) . '\', ' . $row["discount_price"] . ')">Add to Cart</button>
            </div>
        </div>';
    }
} else {
    echo "No products found";
}
  
// Close HTML output
echo '</div>
<footer class="footer">
    <div class="container-footer">
        <!-- Social Media Icons -->
        <div class="social-icons">
            <a href="https://facebook.com/yourcompany" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/yourcompany" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com/yourcompany" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>

        <!-- Address Section -->
        <div class="address">
            <p>Mobile Marvels</p>
            <p>135/5 Malabe, Battaramulla, Sri Lanka, 56789</p>
            <p>Email: <a href="mailto:info@Mobilemarvels.com">info@Mobilemarvels.com</a> | Phone: (123) 456-7890</p>
            <p>&copy; 2024 Mobile Marvels. All rights reserved.</p>
        </div>

        <!-- Google Maps Location -->
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12650.220389312577!2d-73.9893082!3d40.7332913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259adcb5b8c1f%3A0x3c034b0ec03824d0!2sNew%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1605678977583!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</footer>
<script src="productsscripts.js"></script> <!-- Link to your JavaScript file -->
</body>
</html>';

// Close the database connection
$conn->close();
?>

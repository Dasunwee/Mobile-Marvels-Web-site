-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2024 at 08:12 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobilemarvels`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `fullname` varchar(200) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `zip` varchar(50) NOT NULL,
  `cardname` varchar(50) NOT NULL,
  `cardnumber` varchar(50) NOT NULL,
  `expmonth` varchar(20) NOT NULL,
  `expyear` varchar(10) NOT NULL,
  `cvv` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`fullname`, `email`, `address`, `city`, `province`, `zip`, `cardname`, `cardnumber`, `expmonth`, `expyear`, `cvv`) VALUES
('Wickrama arachchilage Dasun Nirmal Weerawardhna', 'dasunweeravardhana@gmail.com', '128/1 Malabe,kaduwela.', 'MInuwangoda', 'Gampaha', '3236', 'Dasun Nirmal', '1223-5649-2359-3256', 'march', '2026', '856'),
('Wickrama arachchilage Samantha Weeravardhana', 'weeravardhana@gmail.com', '128/1 Malabe,battramulla.', 'MInuwangoda', 'Gampaha', '3236', 'Dasun Nirmal', '1223-5649-2359-3256', 'march', '2026', '856');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `original_price` decimal(10,2) NOT NULL,
  `discount_price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category`, `product_name`, `description`, `original_price`, `discount_price`, `image_url`) VALUES
(6, 'Iphones', 'Iphone 15', 'Dynamic island Stays on top of it all.\r\nNew 48MP camera. Super-high-resolution photos. 2x Telephoto.\r\nDurable color-infused glass and aluminum design.\r\nFocus-Pocus, magical new potraits.\r\nWith 02-Years GNEXT Warranty.', 374990.00, 269990.00, 'uploads/iPhone-15-Black.jpg'),
(7, 'Iphones', 'iPhone 15 Pro Blue', 'A17 Pro Game changing chip.\r\nTitanium, So Strong, So Light, So Pro.\r\nLongest optical zoom in iPhone ever.\r\nAll new action button.\r\nA camera that captures your wildest imagination..\r\nWith 02-Years GNEXT Warranty.', 499990.00, 339990.00, 'uploads/iPhone-15-Pro-Blue.jpg'),
(8, 'Iphones', 'iPhone 15 Pro Max Titanium', 'A17 Pro Game changing chip.\r\nTitanium, So Strong, So Light, So Pro.\r\nLongest optical zoom in iPhone ever.\r\nAll new action button.\r\nA camera that captures your wildest imagination..\r\nWith 02-Years GNEXT Warranty.', 489990.00, 349990.00, 'uploads/iPhone-15-Pro-Max-Titanium.jpg'),
(9, 'Iphones', 'iPhone 14 Blue', 'A15 Bionic chip.\r\nLongest Battery Life Ever.\r\nVibrant Super Retina XDR display.\r\nAerospace – grade aluminum.\r\nEmergency SOS via Satellite.\r\nWith 02-Years GNEXT Warranty.', 294990.00, 244990.00, 'uploads/iPhone-14-Blue.jpg'),
(10, 'Mac-Products', 'MacBook Air M3 ( 8 Core CPU – 8 Core GPU, 8GB/512GB )', '16-core Neural Engine.\r\n13.6-inch Liquid Retina display with True Tone.\r\n1080p FaceTime HD camera.\r\nMagSafe 3 charging port.\r\nTwo Thunderbolt / USB 4 ports.\r\nForce Touch trackpad.\r\nWith 01-Year Local + International Warranty.', 699990.00, 424990.00, 'uploads/mac1.jpg'),
(12, 'Mac-Products', 'MacBook Pro M3 – 14inch (8 core CPU – 10 core GPU, 8GB/512GB)', 'Apple M3 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine.\r\n8GB unified memory.\r\n512GB SSD storage.\r\n14-inch Liquid Retina XDR display.\r\nBacklit Magic Keyboard with Touch ID – US English.\r\nWith 01-Year Local + International Warranty.', 699990.00, 484990.00, 'uploads/mac2.jpg'),
(13, 'Mac-Products', 'MacBook Air M2 15” (8 CORE CPU – 10 CORE GPU, 8GB/512GB)', '16-core Neural Engine.\r\n13.6-inch Liquid Retina display with True Tone.\r\n1080p FaceTime HD camera.\r\nMagSafe 3 charging port.Two Thunderbolt / USB 4 ports.Support for up to two external displays (with laptop lid closed).With 01-Year Local + International Warranty.', 699990.00, 534990.00, 'uploads/mac3.jpg'),
(14, 'Android-Phones', 'Galaxy S24 Ultra', 'Galaxy Ai.Armour up with titanium.5,000mAh Battery.Qualcomm Snapdragon 8 Gen 3 for Galaxy.6.8” Dynamic AMOLED 2X.With 06 Months Shop Warranty.', 389990.00, 289990.00, 'uploads/sam2.jpg'),
(15, 'Android-Phones', 'Galaxy A25 5G', '6.5 inches.Super AMOLED, 120Hz, 1000 nits Display.50MP main camera.5000mAh Battery.Unlock with your fingerprint reader.With 06 Months Shop Warranty.', 69990.00, 49990.00, 'uploads/sam1.jpg'),
(16, 'Android-Phones', 'Redmi Note 13 Pro+ 5G', 'Ultra-clear 200MP camera with OIS.1.5K 120Hz AMOLED curved display.MediaTek Dimensity 7200-Ultra.All-star durability.120W HyperCharge with 5000mAh (typ) battery.IP68 dust and water resistance.With 06 Months Shop Warranty.', 134990.00, 129999.00, 'uploads/sam4.jpg'),
(18, 'Smart-Accessories', 'Beats Studio Buds', 'Control the noise.\r\nDriven by premium soundUp to 8 hours of listening timeCompatible with Apple aTransparency.\r\n With 01 Year AppleCare Warranty.\r\nmode allows you to hear the world around yound Android.', 50990.00, 40000.00, 'uploads/cat6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `reguser`
--

CREATE TABLE `reguser` (
  `fullname` varchar(80) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `country` varchar(80) NOT NULL,
  `nic` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reguser`
--

INSERT INTO `reguser` (`fullname`, `mobile`, `username`, `password`, `country`, `nic`) VALUES
('asitha wijesinghe', '+94785236685', 'Asitha', '$2y$10$0TsCyYEa76ZkSHZwY/PSkO6Oq4q3TN1hl4u6x4A5gu61ZDYpXVEXm', 'Sri Lanka', '822234576V'),
('hashini gamage', '+94758569985', 'hashini', '$2y$10$oB24RDUZcw0XXV6NLWxcxeZRoNqkKjzRmKO3dAPHu6nh4YYmY7dvm', 'Sri Lanka', '199935778462'),
('kasun wijethunga', '+94756685210', 'kasun5', '$2y$10$eiXg4w4Rjy5WdRZSynrUDuv4PTCgVeA25BCV3xu0X1.VWuGHrr4lO', 'Sri Lanka', '199935110785'),
('lanaka maatha', '+94550214265', 'lanaka', '$2y$10$Pbnt1WmylVHZln4wVgKOcuzRAl4GwNwy0BRPvtoJLL.CzMa42zHa6', 'Sri Lanka', '199652358745'),
('lanaka maatha', '+94550214265', 'lanakama', '$2y$10$4XNGSB3sSsIEeEi7Qd/BN.4lRY6bCaXWklspzBdol4MCYeYtCWthi', 'Sri Lanka', '199652358745'),
('mallika', '+94712545632', 'malmal', '$2y$10$QUmAGzhVBp1UzrTz9QtvHuQFt10.aYmyrtUa3GA1PW5XX/MO4eeJe', 'Sri Lanka', '199654785234'),
('mallika', '+94712545632', 'mamamage', '$2y$10$jsPfRy.7v8FLyaOG9UJIdeLxlh0Cl84b.P7auxzoDd7D7QiFCusRa', 'Sri Lanka', '199654785234'),
('Nihal Weeravardhana', '+94715263985', 'nihal123', '$2y$10$eP8c/rofFV4MPUUB2rEMwe2hpd9Cop7S4r.JtD0XPZjJ5pIxf3Lky', 'Sri Lanka', '851234589V'),
('Saduni', '+94778453341', 'sadu123', '$2y$10$XRLD622RpDZz0jQqYBYskOJIFk29kb.jY/.NOC4H1pUpYCVD4HHgu', 'Sri Lanka', '199845632014');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` enum('admin','superadmin') DEFAULT 'admin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(20) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `role`, `created_at`, `status`) VALUES
(2, 'superadmin', '$2y$10$JWKOhG33zPW7VkSAcxT7RuOkt62paeU8LF8N9/K4CPUbSoyH45Eta', 'superadmin@example.com', 'superadmin', '2024-09-10 18:23:32', 'active'),
(6, 'admin', '$2y$10$NY2zimLDFpyY.ogU5CfubOuLgl/aD0JxHbNrO4gi31wv4n1il0SXW', 'dasunweeravardhana@gmail.com', '', '2024-09-10 20:15:18', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reguser`
--
ALTER TABLE `reguser`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

const phoneData = {
    "Phone1": {
      "name": "Iphone 15",
      "display": "Super Retina XDR OLED, HDR10, Dolby Vision, 1000 nits (HBM), 2000 nits (peak),6.1 inches, 91.3 cm2 (~86.4% screen-to-body ratio)",
      "processor": "Apple A16 Bionic (4 nm)",
      "ram": "4 GB",
      "storage": "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
      "camera": "48 MP, f/1.6, 26mm (wide), 1/1.56, 1.0µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.4, 13mm, 120˚ (ultrawide)",
      "battery": "Li-Ion 3349 mAh, non-removable",
      "os": "iOS 17, upgradable to iOS 17.6.1, planned upgrade to iOS 18",
      "price": " රු:269,990.00",
      "image": "https://wadnweerawardhanaitbnm22110194.neocities.org/Images/iPhone-15-Black.jpg",
      "rating": 4.1,
      "reviews": 254
    },
    "Phone2": {
      "name": "Phone 15 Pro",
      "display": "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
      "processor": "Apple A17 Pro (3 nm)",
      "ram": "4 GB",
      "storage": "128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM",
      "camera": "48 MP, f/1.8, 24mm (wide), 1/1.28, 1.22µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.8, 77mm (telephoto), 1/3.5, 1.0µm, PDAF, OIS, 3x optical zoom 12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55, 1.4µm, dual pixel PDAF",
      "battery": "Li-Ion 3274 mAh, non-removable",
      "os": "iOS 17, upgradable to iOS 17.6.1, planned upgrade to iOS 18",
      "price": "රු:339,990.00",
      "image": "https://wadnweerawardhanaitbnm22110194.neocities.org/Images/iPhone-15-Pro-Blue.jpg",
      "rating": 4.5,
      "reviews": 350
    },
    "Phone3": {
        "name": "iPhone 15 Pro Max",
        "display": "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
        "processor": "Hexa-core (2x3.78 GHz + 4x2.11 GHz)",
        "ram": "6 GB",
        "storage": "256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM",
        "camera": "48 MP, f/1.8, 24mm (wide), 1/1.28, 1.22µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.8, 120mm (periscope telephoto), 1/3.06, 1.12µm, dual pixel PDAF, 3D sensor‑shift OIS, 5x optical zoom 12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55, 1.4µm, dual pixel PDAF TOF 3D LiDAR scanner (depth)",
        "battery": "Li-Ion 4441 mAh, non-removable",
        "os": "iOS 17, upgradable to iOS 17.6.1, planned upgrade to iOS 18",
        "price": "රු:339,990.00",
        "image": "https://wadnweerawardhanaitbnm22110194.neocities.org/Images/iPhone-15-Pro-Max-Titanium.jpg",
        "rating": 4.7,
        "reviews": 440
      },
      "Phone4": {
        "name": "iPhone 14",
        "display": "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)",
        "processor": "Apple A15 Bionic (5 nm)",
        "ram": "3 GB",
        "storage": "256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM",
        "camera": "12 MP, f/1.5, 26mm (wide), 1/1.7, 1.9µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.4, 13mm, 120˚ (ultrawide)",
        "battery": "Li-Ion 3279 mAh, non-removable (12.68 Wh)",
        "os": "iOS 17, upgradable to iOS 17.6.1, planned upgrade to iOS 18",
        "price": "රු:244,990.00",
        "image": "https://wadnweerawardhanaitbnm22110194.neocities.org/Images/iPhone-14-Blue.jpg",
        "rating": 4.1,
        "reviews": 260
      },
      "Phone5": {
        "name": "iPhone 14 Plus ",
        "display": "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak) Size	6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
        "processor": "Apple A15 Bionic (5 nm)",
        "ram": "3 GB",
        "storage": "256GB 8GB RAM, 512GB 8GB RAM, 1TB 8GB RAM",
        "camera": "2 MP, f/1.5, 26mm (wide), 1/1.7, 1.9µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.4, 13mm, 120˚ (ultrawide)",
        "battery": "Li-Ion 3279 mAh, non-removable (12.68 Wh)",
        "os": "iOS 17, upgradable to iOS 17.6.1, planned upgrade to iOS 18",
        "price": "රු:294,990.00",
        "image": "https://wadnweerawardhanaitbnm22110194.neocities.org/Images/iPhone-14-Plus-Red-600x600.jpg",
        "rating": 4.2,
        "reviews": 360
      },
    // Add more phones here...
  };
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "32px";
    } else {
        navbar.style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
};
  // Function to update the comparison table
  function comparePhones() {
    const phone1 = document.getElementById("phone1").value;
    const phone2 = document.getElementById("phone2").value;
  
    // Update headers
    document.getElementById("phone1Header").innerText = phone1 !== "none" ? phoneData[phone1].name : "Phone 1";
    document.getElementById("phone2Header").innerText = phone2 !== "none" ? phoneData[phone2].name : "Phone 2";
  
    // Update images
    document.getElementById("phone1Image").src = phone1 !== "none" ? phoneData[phone1].image : "";
    document.getElementById("phone2Image").src = phone2 !== "none" ? phoneData[phone2].image : "";
  
    // Update features
    document.getElementById("phone1Display").innerText = phone1 !== "none" ? phoneData[phone1].display : "";
    document.getElementById("phone2Display").innerText = phone2 !== "none" ? phoneData[phone2].display : "";
  
    document.getElementById("phone1Processor").innerText = phone1 !== "none" ? phoneData[phone1].processor : "";
    document.getElementById("phone2Processor").innerText = phone2 !== "none" ? phoneData[phone2].processor : "";
  
    document.getElementById("phone1RAM").innerText = phone1 !== "none" ? phoneData[phone1].ram : "";
    document.getElementById("phone2RAM").innerText = phone2 !== "none" ? phoneData[phone2].ram : "";
  
    document.getElementById("phone1Storage").innerText = phone1 !== "none" ? phoneData[phone1].storage : "";
    document.getElementById("phone2Storage").innerText = phone2 !== "none" ? phoneData[phone2].storage : "";
  
    document.getElementById("phone1Camera").innerText = phone1 !== "none" ? phoneData[phone1].camera : "";
    document.getElementById("phone2Camera").innerText = phone2 !== "none" ? phoneData[phone2].camera : "";
  
    document.getElementById("phone1Battery").innerText = phone1 !== "none" ? phoneData[phone1].battery : "";
    document.getElementById("phone2Battery").innerText = phone2 !== "none" ? phoneData[phone2].battery : "";
  
    document.getElementById("phone1OS").innerText = phone1 !== "none" ? phoneData[phone1].os : "";
    document.getElementById("phone2OS").innerText = phone2 !== "none" ? phoneData[phone2].os : "";
  
    document.getElementById("phone1Price").innerText = phone1 !== "none" ? phoneData[phone1].price : "";
    document.getElementById("phone2Price").innerText = phone2 !== "none" ? phoneData[phone2].price : "";
  
    // Update user ratings
    function updateRating(id, rating, reviews) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        stars += `<span class="fa fa-star ${i <= rating ? 'checked' : ''}"></span>`;
      }
      document.getElementById(id + 'Rating').innerHTML = stars;
      document.getElementById(id + 'Reviews').innerText = `${rating} average based on ${reviews} reviews.`;
    }
  
    if (phone1 !== "none") {
      updateRating("phone1", phoneData[phone1].rating, phoneData[phone1].reviews);
    }
    if (phone2 !== "none") {
      updateRating("phone2", phoneData[phone2].rating, phoneData[phone2].reviews);
    }
  }
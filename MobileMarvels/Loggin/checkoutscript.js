function openNav() {
    document.getElementById("myNav").style.width = "100%"; // Open the overlay
    document.getElementById("openNavButton").style.display = "none"; // Hide the open button
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%"; // Close the overlay
    document.getElementById("openNavButton").style.display = "block"; // Show the open button again
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let navbar = document.getElementById("navbar");
    
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "32px"; // Navbar is visible while scrolling up
    } else {
        navbar.style.top = "0px"; // Navbar hides while scrolling down
    }
    
    prevScrollpos = currentScrollPos;
};

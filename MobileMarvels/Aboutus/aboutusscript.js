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


document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});



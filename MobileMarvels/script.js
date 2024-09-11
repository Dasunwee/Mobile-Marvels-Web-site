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


function searchFunction() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let productGrid = document.querySelector('.product-grid');
    let productCards = productGrid.getElementsByClassName('product-card');

    for (let i = 0; i < productCards.length; i++) {
        let productName = productCards[i].getElementsByTagName('h3')[0].textContent;
        if (productName.toUpperCase().indexOf(input) > -1) {
            productCards[i].style.display = "";
        } else {
            productCards[i].style.display = "none";
        }
    }

}
let cart = [];

function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);

    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Update cart count
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    // Update cart items and total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    cartItemsElement.innerHTML = cart.map(item => `
        <div class="cart-item">
            <p>${item.name} - රු:${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        </div>
    `).join('');

    cartTotalElement.textContent = `Total:රු:${totalPrice.toFixed(2)}`;
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
}

function buyNow() {
    alert('Proceeding to buy!');
    cart = [];
    updateCart();
    toggleCart();
    
    // Redirect to login page
    window.location.href = '../Loggin/loggin.html'; 
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// JavaScript for Responsive Adjustments (Example)
window.addEventListener('resize', function() {
  let gridContainer = document.querySelector('.grid-container');
  let gridColumns = Math.floor(window.innerWidth / 300); // 300px per column

  gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
});





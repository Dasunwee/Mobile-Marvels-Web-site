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
    let productColumns = document.querySelectorAll('.column'); // Select all product columns

    productColumns.forEach(column => {
        let productName = column.querySelector('h3') ? column.querySelector('h3').textContent : "";
        if (productName.toUpperCase().indexOf(input) > -1) {
            column.style.display = "";
        } else {
            column.style.display = "none";
        }
    });
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
            <p>${item.name} - රු:${item.price.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' }).replace('LKR', '')} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        </div>
    `).join('');

    cartTotalElement.textContent = `Total: රු:${totalPrice.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' }).replace('LKR', '')}`;
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
}


 // Initial call to display all items
 filterSelection("all"); 

 function filterSelection(c) {
     var x, i;
     x = document.getElementsByClassName("column");
     console.log("Filter selection:", c); // Debugging line
     if (c === "all") c = ""; // Show all items
     for (i = 0; i < x.length; i++) {
         // Ensure 'show' class is removed from all items
         w3RemoveClass(x[i], "show");
         // Add 'show' class if the item matches the filter or if 'all' is selected
         if (x[i].className.indexOf(c) > -1 || c === "") {
             w3AddClass(x[i], "show");
         }
     }
 }

 function w3AddClass(element, name) {
     var arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (var i = 0; i < arr2.length; i++) {
         if (arr1.indexOf(arr2[i]) === -1) {
             element.className += " " + arr2[i];
         }
     }
 }

 function w3RemoveClass(element, name) {
     var arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (var i = 0; i < arr2.length; i++) {
         while (arr1.indexOf(arr2[i]) > -1) {
             arr1.splice(arr1.indexOf(arr2[i]), 1);
         }
     }
     element.className = arr1.join(" ");
 }

 // Highlight active category button
 var btnContainer = document.getElementById("myBtnContainer");
 var btns = btnContainer.getElementsByClassName("btn");
 for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
         var current = document.getElementsByClassName("active");
         if (current.length > 0) {
             current[0].className = current[0].className.replace(" active", "");
         }
         this.className += " active";
     });
 }
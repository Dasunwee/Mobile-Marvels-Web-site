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



// JavaScript Validation Script with Updated IDs and Class Names
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.validation-error-message').forEach(el => el.textContent = '');

    // Validate First Name
    const firstName = document.getElementById('firstName');
    if (!firstName.value.match(/^[A-Za-z\s]{1,50}$/)) {
        document.getElementById('firstNameError').textContent = 'Please enter a valid name (letters and spaces only, max 50 characters).';
        valid = false;
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName');
    if (!lastName.value.match(/^[A-Za-z\s]{1,50}$/)) {
        document.getElementById('lastNameError').textContent = 'Please enter a valid last name (letters and spaces only, max 50 characters).';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('emailAddress');
    if (!email.validity.valid) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate Country
    const country = document.getElementById('countrySelect');
    if (country.value === '') {
        document.getElementById('countryError').textContent = 'Please select your country.';
        valid = false;
    }

    // Validate Subject
    const subject = document.getElementById('messageSubject');
    if (subject.value.trim() === '') {
        document.getElementById('subjectError').textContent = 'Please enter a message.';
        valid = false;
    }

    // Prevent form submission if invalid
    if (!valid) {
        event.preventDefault();
    }
});
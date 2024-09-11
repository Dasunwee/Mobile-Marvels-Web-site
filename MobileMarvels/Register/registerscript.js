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
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Phone validation for Sri Lanka format +94xxxxxxxxx
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\+94\d{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be in the format +94xxxxxxxxx';
        isValid = false;
    }

    // Username validation
    const username = document.getElementById('username').value.trim();
    if (username.length < 5) {
        document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }
     // Get form values
     const country = document.getElementById('country').value;
     const nic = document.getElementById('nic').value;
     const countryError = document.getElementById('countryError');
     const nicError = document.getElementById('nicError');
 
     // Reset errors
     countryError.textContent = '';
     nicError.textContent = '';
 
     // Validate NIC based on selected country
     if (!country) {
         countryError.textContent = 'Please select your country.';
         isValid = false;
     }
 
     if (!nic) {
         nicError.textContent = 'Please enter your NIC number.';
         isValid = false;
     } else {
         // Basic example validation, customize according to country format
         switch (country) {
             case 'Sri Lanka':
                 // Example format: NxxxxxxV or  xxxxxxxX
                 const sriLankaNICRegex = /^[0-9]{9}[vVX]|[0-9]{12}$/;
                 if (!sriLankaNICRegex.test(nic)) {
                     nicError.textContent = 'Invalid NIC number format for Sri Lanka.';
                     isValid = false;
                 }
                 break;
             // Add additional cases for other countries
             default:
                 // No specific validation for other countries
                 break;
         }
     }
 

     if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').submit();  // Programmatically submit the form
    }
    
});
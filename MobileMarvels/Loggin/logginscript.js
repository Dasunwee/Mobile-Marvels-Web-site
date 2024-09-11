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

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous error messages
  document.getElementById('usernameError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  // Get form values
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();

  // Validation flags
  var isValid = true;

  // Username validation
  if (username.length < 3 || username.length > 50) {
    document.getElementById('usernameError').textContent = 'Username must be between 3 and 50 characters.';
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // If form is valid, submit the form
  if (isValid) {
    // Create a FormData object to send the form data
    var formData = new FormData(document.getElementById('loginForm'));

    // Send the form data to the server using fetch
    fetch('/MobileMarvels/Loggin/login.php', {  // Make sure the path matches your actual PHP file
      method: 'POST',
      body: formData
    })
    .then(response => response.json())  // Assuming login.php returns a JSON response
    .then(data => {
      if (data.success) {
        // Redirect to checkout.html if login is successful
        window.location.href = "/checkout.html";
      } else {
        // Show error message if login fails
        document.getElementById('formSuccess').textContent = data.message;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('formSuccess').textContent = 'An error occurred. Please try again.';
    });
  }
});

// Handle forgot password link click
document.getElementById('forgotPassword').addEventListener('click', function(event) {
  event.preventDefault();
  // Redirect to a forgot password page or show a modal
  alert('Redirect to forgot password page.');
});

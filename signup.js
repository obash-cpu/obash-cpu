document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Perform sign up logic
    var userData = {
      username: username,
      email: email,
      password: password
    };
  
    // Example: Send user data to a server using fetch
    fetch('your-server-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Sign up failed');
        }
      })
      .then(data => {
        // Handle success response
        console.log('Sign up successful!', data);
        alert('Sign up successful!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch(error => {
        // Handle error response
        console.error('Sign up error:', error);
        alert('Sign up failed. Please try again.');
      });
  });
  

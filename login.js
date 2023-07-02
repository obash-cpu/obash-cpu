document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform login logic
    // Add your custom login code here
    // You can send the data to a server, validate it, etc.
  
    // Placeholder for login logic
    // Replace this code with your own login implementation
    var userData = {
      username: username,
      password: password
    };
  
    // Example: Send login data to a server using fetch
    fetch('/login', {
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
          throw new Error('Login failed');
        }
      })
      .then(data => {
        // Handle success response
        console.log('Login successful!', data);
        alert('Login successful!');
        // Redirect to the question page or perform necessary actions
        window.location.href = 'questions.html'; // Redirect to question page
      })
      .catch(error => {
        // Handle error response
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      });
  });
  

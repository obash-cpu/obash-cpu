// Add any JavaScript code specific to the Contact Us page here
// This file can be used to handle any dynamic functionality or form submissions

// Example code for handling form submission
document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');
  var backLink = document.getElementById('backLink');
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission logic here
    
    // Example: Display a success message
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Reset the form
    contactForm.reset();
  });
  
  backLink.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
});

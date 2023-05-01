
$(document).ready(function() {
  // Handle form submission
  $('#registration-form').submit(function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Clear any previous error messages
    $('.error-message').html('');
    
    // Get form data
    var formData = {
      'username' : $('#username').val(),
      'email' : $('#email').val(),
      'password' : $('#password').val(),
      'confirm_password' : $('#confirm-password').val()
    };
    
    // Validate form data
    var errors = [];
    if(formData.username == '') {
      errors.push('Please enter a username.');
      $('#username-error').html('Please enter a username.');
    }
    if(formData.email == '') {
      errors.push('Please enter an email address.');
      $('#email-error').html('Please enter an email address.');
    }
    if(formData.password == '') {
      errors.push('Please enter a password.');
      $('#password-error').html('Please enter a password.');
    }
    if(formData.confirm_password == '') {
      errors.push('Please confirm your password.');
      $('#confirm-password-error').html('Please confirm your password.');
    }
    if(formData.password != formData.confirm_password) {
      errors.push('Passwords do not match.');
      $('#password-error').html('Passwords do not match.');
      $('#confirm-password-error').html('Passwords do not match.');
    }
    
    // If there are no errors, authenticate the user
    if(errors.length == 0) {
      $.ajax({
        type: 'POST',
        url: 'authenticate.php', // Replace with the URL of your authentication script
        data: formData,
        success: function(response) {
          if(response == 'success') {
            alert('You have successfully registered and logged in.');
            window.location.href = 'dashboard.html'; // Replace with the URL of your dashboard page
          }
          else {
            alert('Registration failed. Please try again.');
          }
        }
      });
    }
  });
});


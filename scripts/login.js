$(document).ready(function() {
	$("#login-form").submit(function(event) {
		event.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();

		// Validate username
		if (username.length == 0) {
			$("#username-error").text("Please enter a username");
		} else {
			$("#username-error").text("");
		}

		// Validate password
		if (password.length == 0) {
			$("#password-error").text("Please enter a password");
		} else {
			$("#password-error").text("");
		}

		// Submit form if there are no errors
		if ($("#username-error").text().length == 0 && $("#password-error").text().length == 0) {
			$(this).unbind('submit').submit();
		}
	});
});
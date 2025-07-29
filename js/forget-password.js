document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgetPasswordForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent actual form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      const errorElement = document.getElementById("error-message");
      errorElement.textContent = "Passwords do not match.";
      errorElement.style.display = "block";
      return; // Stop form submission
    }

    // Check user existence
    is_found = false;
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.forEach(user => {
      if (user.username === username) {
        is_found = true;
      }
    });

    // Save user data
    if (!is_found) {
      const errorElement = document.getElementById("error-message");
      errorElement.textContent = "User not found";
      errorElement.style.display = "block";
    }
    else {
      users = users.map(user => {
        if (user.username === username) {
          return { ...user, password: password }; // Change password
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(users));


      alert(`Password has been changed for user: ${username}`);
      // If successful, redirect to login page
      window.location.href = "login.html"; 
    }

  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent actual form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let is_found = false;
    let error_type = "not_found";
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.forEach(user => {
      if (user.username === username) {
        if (user.password === password) {
          is_found = true;
        } else {
          error_type = "invalid";
        }
      }
    });

    // Save user data
    if (is_found) {
      alert(`Logging in as user: ${username}`);
      // If successful, redirect to login page
      window.location.href = "index.html"; 
    }
    else {
      if (error_type === "not_found") {
        const errorElement = document.getElementById("error-message");
        errorElement.textContent = "User not found.";
        errorElement.style.display = "block";
      } else if (error_type === "invalid") {
        const errorElement = document.getElementById("error-message");
        errorElement.textContent = "Invalid password.";
        errorElement.style.display = "block";
      }
    }

    });
  });
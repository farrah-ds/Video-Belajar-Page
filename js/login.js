document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isFound = false;
    let errorType = "not_found";
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    users.forEach(user => {
      if (user.email === email) {
        if (user.password === password) {
          isFound = true;
        } else {
          errorType = "invalid";
        }
      }
    });

    if (isFound) {
      // Hide error, show success
      errorMessage.style.display = "none";
      successMessage.textContent = "Welcome! Ready to learn something new?";
      successMessage.style.display = "block";

      // Redirect after delay
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else {
      // Show error message
      successMessage.style.display = "none";
      errorMessage.textContent =
        errorType === "not_found"
          ? "User not found."
          : "Invalid password.";
      errorMessage.style.display = "block";
    }
  });
});

// 🔒 Toggle password visibility
function togglePassword(id, toggleIcon) {
  const input = document.getElementById(id);
  const type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
  toggleIcon.classList.toggle("show");
}

// 🔐 Google Sign-In handler
function handleCredentialResponse(response) {
  const token = response.credential;
  const payload = JSON.parse(atob(token.split('.')[1]));

  console.log("Google User:", payload);

  // Show success message
  const successMessage = document.getElementById("success-message");
  successMessage.textContent = `Welcome, ${payload.name}! Ready to learn something new?`;
  successMessage.style.display = "block";

  // Store to localStorage (optional)
  localStorage.setItem("googleUser", JSON.stringify(payload));

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}


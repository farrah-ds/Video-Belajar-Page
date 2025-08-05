document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgetPasswordForm");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const newPassword = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(user => user.email === email);

    // Validate: user exists
    if (userIndex === -1) {
      errorMessage.textContent = "User not found.";
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
      return;
    }

    // Validate: passwords match
    if (newPassword !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
      return;
    }

    // Update password
    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    // Show success, hide errors
    errorMessage.style.display = "none";
    successMessage.style.display = "block";

    // Optional: redirect after success (e.g., to login page)
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
});

// 👁 Toggle password visibility
function togglePassword(id, toggleIcon) {
  const input = document.getElementById(id);
  const type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
  toggleIcon.classList.toggle("show"); // optional styling toggle
}


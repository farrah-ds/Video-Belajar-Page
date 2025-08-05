document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const successMessage = document.getElementById("success-message");
  const errorElement = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    errorElement.style.display = "none";
    successMessage.style.display = "none";

    if (password !== confirmPassword) {
      errorElement.textContent = "Passwords do not match.";
      errorElement.style.display = "block";
      return;
    }

    const newUser = { name, email, phone, password };
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const isDuplicate = users.some(user => user.email === email);
    if (isDuplicate) {
      errorElement.textContent = "Email is already registered.";
      errorElement.style.display = "block";
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    form.reset();
    successMessage.textContent = "Registration successful! You can now log in.";
    successMessage.style.display = "block";
  });
});

// 👁 Toggle password visibility
function togglePassword(id, toggleIcon) {
  const input = document.getElementById(id);
  const type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
  toggleIcon.classList.toggle("show");
}

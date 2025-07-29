document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent actual form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // console.log("Username:", username);
    // console.log("Password:", password);

    is_valid = true;
    // Check to datastore
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.forEach(user => {
      if (user.username === username) {
        is_valid = false;
        const errorElement = document.getElementById("error-message");
        errorElement.textContent = "Username already exists.";
        errorElement.style.display = "block";
        throw new Error("Username already exists");
      }
    });

    // Save user data
    if (is_valid) {
      users.push({ username: username, password: password });
      localStorage.setItem("users", JSON.stringify(users));

      alert(`Registering user: ${username}`);
      // If successful, redirect to login page
      window.location.href = "login.html"; 
    }
  });
});
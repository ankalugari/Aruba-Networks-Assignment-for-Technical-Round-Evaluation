// Signup Function
function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let valid = true;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    window.location.href = "login.html";
  }
}

// Login Function
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  document.getElementById("loginEmailError").innerText = "";
  document.getElementById("loginPasswordError").innerText = "";

  if (email !== storedEmail || password !== storedPassword) {
    document.getElementById("loginPasswordError").innerText =
      "Invalid email or password";
    return;
  }

  window.location.href = "success.html";
}

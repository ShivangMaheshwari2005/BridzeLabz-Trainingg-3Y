// Q7: Login form validation using regular expressions.
const loginForm = document.getElementById("loginForm");
const usernamePattern = /^.{5,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usernameError = usernamePattern.test(username)
    ? "" : "Username must be at least 5 characters long.";
  let passwordError = "";

  if (password.length < 8) {
    passwordError = "Password must be at least 8 characters long.";
  } else if (!/[A-Z]/.test(password)) {
    passwordError = "Password must include an uppercase letter.";
  } else if (!/[a-z]/.test(password)) {
    passwordError = "Password must include a lowercase letter.";
  } else if (!/\d/.test(password)) {
    passwordError = "Password must include a number.";
  } else if (!/[^A-Za-z0-9]/.test(password)) {
    passwordError = "Password must include a special character.";
  } else if (!passwordPattern.test(password)) {
    passwordError = "Password does not meet the requirements.";
  }

  document.getElementById("usernameError").textContent = usernameError;
  document.getElementById("passwordError").textContent = passwordError;
  document.getElementById("result").textContent =
    usernameError || passwordError ? "Please fix the errors above." : "Login validation successful!";
});

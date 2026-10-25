// Q2: Student Form Validator using regular expressions
const studentForm = document.getElementById("studentForm");
const rules = {
  name: /^[A-Za-z ]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const messages = {
  name: "Name must contain alphabets only.",
  email: "Enter a valid email, such as example@domain.com.",
  phone: "Phone number must contain exactly 10 digits.",
  password: "Password needs an uppercase letter, a number, and a special character."
};

function validateField(id) {
  const field = document.getElementById(id);
  const error = document.getElementById(`${id}Error`);
  const isValid = rules[id].test(field.value.trim());

  field.classList.toggle("valid", isValid);
  field.classList.toggle("invalid", !isValid);
  error.textContent = isValid ? "" : messages[id];
  return isValid;
}

Object.keys(rules).forEach(id => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

studentForm.addEventListener("submit", event => {
  event.preventDefault();
  const allValid = Object.keys(rules).map(validateField).every(Boolean);
  document.getElementById("result").textContent = allValid
    ? "Registration form is valid!"
    : "Please correct the highlighted fields.";
});

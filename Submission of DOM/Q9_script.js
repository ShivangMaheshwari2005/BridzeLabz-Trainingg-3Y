// Q9 – Form Submit Blocker with preventDefault() and Live Errors
const registrationForm = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("success-message");

const formFields = [
  { input: nameInput, errorId: "name-error" },
  { input: emailInput, errorId: "email-error" },
  { input: passwordInput, errorId: "password-error" }
];

function validateField(input) {
  const value = input.value.trim();
  let errorMessage = "";

  if (input === nameInput && value === "") {
    errorMessage = "Name is required.";
  } else if (input === emailInput && value === "") {
    errorMessage = "Email is required.";
  } else if (input === emailInput && !value.includes("@")) {
    errorMessage = "Email must contain @.";
  } else if (input === passwordInput && value.length < 6) {
    errorMessage = "Password must be at least 6 characters.";
  }

  document.getElementById(`${input.id}-error`).textContent = errorMessage;
  input.classList.toggle("invalid", Boolean(errorMessage));
  return errorMessage === "";
}

// Validate again as the user types; a corrected field's error disappears.
formFields.forEach(({ input }) => {
  input.addEventListener("input", () => {
    validateField(input);
    successMessage.textContent = "";
  });
});

registrationForm.addEventListener("submit", (event) => {
  // Prevent the browser's normal page reload/form submission.
  event.preventDefault();

  const formIsValid = formFields
    .map(({ input }) => validateField(input))
    .every(Boolean);

  if (formIsValid) {
    successMessage.textContent = "Form Submitted Successfully";
    registrationForm.reset();
    formFields.forEach(({ input }) => input.classList.remove("invalid"));
  } else {
    successMessage.textContent = "";
  }
});

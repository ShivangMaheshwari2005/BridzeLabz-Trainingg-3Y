// Q3 – Multi-Step Form with Next/Back and Validation
const steps = [...document.querySelectorAll(".form-step")];
const stepLabel = document.getElementById("step-label");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const summary = document.getElementById("summary");
const summaryContent = document.getElementById("summary-content");
const form = document.getElementById("multi-step-form");
let currentStep = 0;

const fields = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("password")
];

function validateCurrentStep() {
  const field = fields[currentStep];
  const errorElement = document.getElementById(`${field.id}-error`);
  const value = field.value.trim();
  let errorText = "";

  if (!value) {
    errorText = "This field is required.";
  } else if (field.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorText = "Please enter a valid email address.";
  } else if (field.id === "password" && value.length < 6) {
    errorText = "Password must contain at least 6 characters.";
  }

  errorElement.textContent = errorText;
  return errorText === "";
}

function showStep() {
  steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
  stepLabel.textContent = `Step ${currentStep + 1} of 3`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    form.hidden = true;
    stepLabel.hidden = true;
    summary.hidden = false;
    summaryContent.textContent =
      `Name: ${fields[0].value.trim()} | Email: ${fields[1].value.trim()} | Password: ${"*".repeat(fields[2].value.length)}`;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

// Clear the current step's error as the user corrects the value.
fields.forEach((field) => {
  field.addEventListener("input", () => {
    document.getElementById(`${field.id}-error`).textContent = "";
  });
});

document.getElementById("restart-button").addEventListener("click", () => {
  form.reset();
  fields.forEach((field) => {
    document.getElementById(`${field.id}-error`).textContent = "";
  });
  currentStep = 0;
  form.hidden = false;
  stepLabel.hidden = false;
  summary.hidden = true;
  showStep();
});

form.addEventListener("submit", (event) => event.preventDefault());
showStep();

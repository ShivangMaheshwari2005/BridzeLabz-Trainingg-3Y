// Q8 – Custom Dropdown Using Only JavaScript (No select element)
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdown-button");
const dropdownOptions = document.getElementById("dropdown-options");
const selectionText = document.getElementById("selection");

function closeDropdown() {
  dropdownOptions.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
}

// Capturing phase: this document listener runs before target/bubbling listeners.
// It closes the dropdown only when the click occurs outside the dropdown.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    closeDropdown();
  }
}, true);

dropdownButton.addEventListener("click", () => {
  const shouldOpen = dropdownOptions.hidden;
  dropdownOptions.hidden = !shouldOpen;
  dropdownButton.setAttribute("aria-expanded", String(shouldOpen));
});

dropdownOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest("button[data-value]");
  if (!optionButton) return;

  const selectedValue = optionButton.getAttribute("data-value");
  dropdownButton.textContent = `${selectedValue} ▾`;
  selectionText.textContent = `Selected: ${selectedValue}`;
  closeDropdown();
});

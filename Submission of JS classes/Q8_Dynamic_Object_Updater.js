// Q8: Update the user object from form values and show it on the page.
const user = { name: "John", email: "john@mail.com", age: 21 };

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");

function renderUser() {
  output.textContent = JSON.stringify(user, null, 2);
}

nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;
renderUser();

userForm.addEventListener("submit", event => {
  event.preventDefault();
  user.name = nameInput.value.trim();
  user.email = emailInput.value.trim();
  user.age = Number(ageInput.value);
  renderUser();
  console.log("Updated user:", user);
});

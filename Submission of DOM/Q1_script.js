// Q1 – Dynamic Product List Manager
const productForm = document.getElementById("product-form");
const productInput = document.getElementById("product-input");
const productList = document.getElementById("product-list");
const message = document.getElementById("message");

let activeEditItem = null;

// Save the current inline edit. This is also called when the user clicks elsewhere.
function saveActiveEdit() {
  if (!activeEditItem) return;

  const editInput = activeEditItem.querySelector(".edit-input");
  const nameSpan = activeEditItem.querySelector(".product-name");
  const updatedName = editInput.value.trim();

  if (updatedName) {
    nameSpan.textContent = updatedName;
  }

  activeEditItem.classList.remove("editing");
  editInput.replaceWith(nameSpan);
  activeEditItem = null;
}

// Add a product without inserting user text as HTML.
productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = productInput.value.trim();

  if (!productName) {
    message.textContent = "Please enter a product name.";
    return;
  }

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
  message.textContent = "";
  productInput.focus();
});

// Event delegation: one listener on the parent UL handles all Edit/Delete buttons.
productList.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) return;

  const listItem = clickedButton.closest("li");
  if (!listItem) return;

  if (clickedButton.classList.contains("delete-button")) {
    if (activeEditItem === listItem) activeEditItem = null;
    listItem.remove();
    return;
  }

  if (clickedButton.classList.contains("edit-button")) {
    if (activeEditItem && activeEditItem !== listItem) saveActiveEdit();
    if (activeEditItem === listItem) return;

    const nameSpan = listItem.querySelector(".product-name");
    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = nameSpan.textContent;
    nameSpan.replaceWith(editInput);
    listItem.classList.add("editing");
    activeEditItem = listItem;
    editInput.focus();
    editInput.select();
  }
});

// Clicking outside the currently edited list item automatically saves it.
document.addEventListener("click", (event) => {
  if (activeEditItem && !activeEditItem.contains(event.target)) {
    saveActiveEdit();
  }
});

// Enter saves an edit; Escape restores the previous name.
productList.addEventListener("keydown", (event) => {
  if (!event.target.classList.contains("edit-input")) return;
  if (event.key === "Enter") saveActiveEdit();
  if (event.key === "Escape") {
    const editInput = event.target;
    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = editInput.defaultValue;
    editInput.replaceWith(nameSpan);
    activeEditItem.classList.remove("editing");
    activeEditItem = null;
  }
});

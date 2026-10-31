// Q5 – Image Gallery with Modal Preview
const gallery = document.getElementById("gallery");
const modal = document.getElementById("image-modal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modal-image");
const closeModalButton = document.getElementById("close-modal");

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;

  // Copy the clicked image's source and alternative text into the modal.
  modalImage.src = event.target.src;
  modalImage.alt = event.target.alt;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
});

// Stop clicks inside the modal panel from reaching the overlay.
modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

// Clicking the overlay (outside modal content) closes the preview.
modal.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

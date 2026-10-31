// Q2 – Live Character Counter with Warning Behavior
const messageInput = document.getElementById("message-input");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");
const maximumCharacters = 100;

function updateCounter() {
  const remainingCharacters = maximumCharacters - messageInput.value.length;
  counter.textContent = `${remainingCharacters} characters remaining`;
  counter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
  counter.classList.toggle("danger", remainingCharacters === 0);
}

// beforeinput lets us stop an input operation before it changes the textarea.
// This covers typing and most paste/input actions; maxlength is an extra safeguard.
messageInput.addEventListener("beforeinput", (event) => {
  const currentLength = messageInput.value.length;
  const selectedLength = messageInput.value.slice(
    messageInput.selectionStart,
    messageInput.selectionEnd
  ).length;
  const incomingText = event.data || "";
  const proposedLength = currentLength - selectedLength + incomingText.length;

  if (proposedLength > maximumCharacters) {
    event.preventDefault();
  }
});

messageInput.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
  messageInput.value = "";
  updateCounter();
  messageInput.focus();
});

updateCounter();

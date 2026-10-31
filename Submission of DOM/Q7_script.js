// Q7 – Detect Mouse Path & Coordinates Logger
const trackingBox = document.getElementById("tracking-box");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", (event) => {
  // clientX/clientY are coordinates relative to the browser viewport.
  coordinates.textContent = `clientX: ${event.clientX} | clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", (event) => {
  const boxBounds = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "red-dot";

  // Convert viewport coordinates to positions inside the tracking box.
  dot.style.left = `${event.clientX - boxBounds.left}px`;
  dot.style.top = `${event.clientY - boxBounds.top}px`;
  trackingBox.appendChild(dot);
});

// Q5: Validate booking details and display a ticket.
const bookingForm = document.getElementById("bookingForm");
const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const seatsText = document.getElementById("seats").value.trim();
  const seats = Number(seatsText);

  const errors = {
    name: namePattern.test(name) ? "" : "Use alphabets only for the name.",
    email: emailPattern.test(email) ? "" : "Enter a valid email address.",
    seats: /^\d+$/.test(seatsText) && seats >= 1 && seats <= 10
      ? "" : "Seats must be a whole number from 1 to 10."
  };

  Object.entries(errors).forEach(([field, error]) => {
    document.getElementById(`${field}Error`).textContent = error;
  });

  if (Object.values(errors).some(Boolean)) {
    document.getElementById("ticket").hidden = true;
    return;
  }

  const booking = { name, email, seats };
  const ticket = document.getElementById("ticket");
  ticket.replaceChildren();
  const heading = document.createElement("h2");
  heading.textContent = "Booking Confirmed";
  const details = document.createElement("p");
  details.textContent = `Name: ${booking.name} | Email: ${booking.email} | Seats: ${booking.seats}`;
  ticket.append(heading, details);
  ticket.hidden = false;
  console.log("Booking details:", booking);
});

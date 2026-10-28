// Q9: Shopping cart with coupon validation.
class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    // Accept only SAVE20 or DISC10, ignoring letter case.
    const couponPattern = /^(SAVE20|DISC10)$/i;
    if (!couponPattern.test(code)) return false;

    this.discountPercent = code.toUpperCase() === "SAVE20" ? 20 : 10;
    return true;
  }

  getFinalTotal() {
    return this.getTotal() * (1 - this.discountPercent / 100);
  }
}

const cart = new Cart();
const itemForm = document.getElementById("itemForm");
const couponForm = document.getElementById("couponForm");

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.items.forEach(item => {
    const row = document.createElement("li");
    row.textContent = `${item.name} — ₹${item.price.toFixed(2)} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`;
    list.appendChild(row);
  });

  document.getElementById("subtotal").textContent = `Subtotal: ₹${cart.getTotal().toFixed(2)}`;
  document.getElementById("finalTotal").textContent =
    `Final total (${cart.discountPercent}% discount): ₹${cart.getFinalTotal().toFixed(2)}`;
}

itemForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("itemName").value.trim();
  const price = Number(document.getElementById("itemPrice").value);
  const quantity = Number(document.getElementById("quantity").value);

  if (!name || !Number.isFinite(price) || price <= 0 ||
      !Number.isInteger(quantity) || quantity < 1) {
    alert("Enter a valid item name, positive price, and whole-number quantity.");
    return;
  }

  cart.addItem(name, price, quantity);
  // A new cart change clears an old coupon so totals are not misleading.
  cart.discountPercent = 0;
  document.getElementById("couponMessage").textContent = "";
  itemForm.reset();
  renderCart();
});

couponForm.addEventListener("submit", event => {
  event.preventDefault();
  const code = document.getElementById("coupon").value.trim();
  const message = document.getElementById("couponMessage");

  if (cart.applyCoupon(code)) {
    message.textContent = `Coupon applied: ${cart.discountPercent}% discount.`;
    message.style.color = "#218838";
  } else {
    cart.discountPercent = 0;
    message.textContent = "Invalid coupon. Use SAVE20 or DISC10.";
    message.style.color = "#c62828";
  }
  renderCart();
});

renderCart();

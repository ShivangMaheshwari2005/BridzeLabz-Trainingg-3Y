// Q8. Dynamic Discount Evaluator
function evaluateCart(cart, label) {
  const originalTotal = cart.reduce((sum, p) => sum + p.price, 0);

  // Category discounts using loop + conditionals
  const discounted = [];
  for (const product of cart) {
    let discount = 0;
    if (product.category === "electronics") discount = 0.10;
    else if (product.category === "fashion") discount = 0.05;

    const finalPrice = product.price - product.price * discount;
    discounted.push({ ...product, discount: discount * 100, finalPrice });
    console.log(`${product.item}: ${product.price} - ${discount * 100}% = ${finalPrice}`);
  }

  let total = discounted.reduce((sum, p) => sum + p.finalPrice, 0);

  // Extra 5% if the original cart value exceeds 50000
  if (originalTotal > 50000) {
    total = total - total * 0.05;
    console.log("Cart value > 50000 -> extra 5% discount applied");
  }

  console.log(`[${label}] Original total: ${originalTotal} | Final total: ${total.toFixed(2)}`);
  console.log("-----------------------------");
}

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
evaluateCart(cart, "Given cart");

// Extra test: a bigger cart that triggers the overall 5% discount
const bigCart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Phone", category: "electronics", price: 20000 },
  { item: "Book", category: "education", price: 600 }
];
evaluateCart(bigCart, "Big cart");

// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price -= this.price * percent / 100;
  }

  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Keyboard", 1200, "Electronics"),
  new Product(2, "Notebook", 120, "Stationery"),
  new Product(3, "Headphones", 1800, "Electronics"),
  new Product(4, "Water Bottle", 650, "Accessories")
];

// Example discount: apply 10% to the first product.
products[0].applyDiscount(10);

const output = document.getElementById("output");
document.getElementById("showProducts").addEventListener("click", () => {
  const expensiveProducts = products.filter(product => product.price > 1000);
  output.innerHTML = "";

  if (expensiveProducts.length === 0) {
    output.textContent = "No products cost more than ₹1000.";
    return;
  }

  const list = document.createElement("ul");
  expensiveProducts.forEach(product => {
    const item = document.createElement("li");
    item.textContent = product.getDetails();
    list.appendChild(item);
  });
  output.appendChild(list);
});

// Also print all product details in the browser console.
products.forEach(product => console.log(product.getDetails()));

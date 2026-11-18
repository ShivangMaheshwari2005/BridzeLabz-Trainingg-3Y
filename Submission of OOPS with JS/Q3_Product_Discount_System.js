function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    const discount = (this.price * percent) / 100;
    return this.price - discount;
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Mobile", 20000);
const p3 = new Product("Headphones", 5000);

console.log(p1.name, "Discounted Price:", p1.applyDiscount(10));
console.log(p2.name, "Discounted Price:", p2.applyDiscount(20));
console.log(p3.name, "Discounted Price:", p3.applyDiscount(15));

// Abstraction: applyDiscount() hides the discount calculation.
// We only call the method and provide the discount percentage.

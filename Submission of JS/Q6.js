// Q6. Progressive Discount System
let total = 7500;
let discount = 0;

// Select a discount tier based on purchase amount
if (total >= 10000) {
    discount = 25;
} else if (total >= 5000) {
    discount = 15;
} else if (total >= 2000) {
    discount = 5;
}

let discountAmount = Math.round(total * discount / 100);
let finalPrice = Math.round(total - discountAmount);

// Display bill details
console.log("Original Total: ₹" + total);
console.log("Discount: " + discount + "%");
console.log("Final Price: ₹" + finalPrice);

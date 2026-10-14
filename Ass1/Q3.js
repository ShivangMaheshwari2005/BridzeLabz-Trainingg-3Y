// Q3. Monthly Expense Tracker
// Expenses: food, travel, rent, bills, leisure
let expenses = [5000, 1500, 8000, 2000, 1000];
let total = 0;

// Calculate total expenses
for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display expense summary
console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount After Tax: ₹" + finalAmount.toFixed(2));

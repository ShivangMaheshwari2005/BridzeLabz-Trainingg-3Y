const menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        const food = menu.find(menuItem => menuItem.name === item);

        if (!food) {
            throw new Error(item + " is not available!");
        }

        return food.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    const bill = calculateBill(["Pizza", "Burger"]);
    console.log("Total Bill:", bill);
} catch (error) {
    console.log("Error:", error.message);
}

// Example invalid order:
// try {
//     console.log(calculateBill(["Pizza", "Sushi"]));
// } catch (error) {
//     console.log("Error:", error.message);
// }

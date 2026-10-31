// Q8 – Order Processing Flow: Async Retry Mechanism

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // The order has a 50% chance of success.
            if (Math.random() < 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject(new Error("Server error while submitting order"));
            }
        }, 700);
    });
}

async function processOrder() {
    // Try at most three times.
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            console.log(result);
            return; // Stop retrying after success.
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    // This line runs only if all three attempts fail.
    throw new Error("Order could not be processed");
}

processOrder().catch((error) => {
    console.error("Final failure:", error.message);
});

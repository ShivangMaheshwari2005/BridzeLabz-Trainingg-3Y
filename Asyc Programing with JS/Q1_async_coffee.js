// Q1 – The Startup Morning: Async Coffee Maker
// Each function returns a Promise and takes 1–2 seconds.

function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000;
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Water boiling failed."));
            } else {
                console.log("Step 1: Water boiled.");
                resolve();
            }
        }, randomDelay());
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Coffee brewing failed."));
            } else {
                console.log("Step 2: Coffee brewed.");
                resolve();
            }
        }, randomDelay());
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error("Pouring coffee failed."));
            } else {
                console.log("Step 3: Coffee poured into the cup.");
                resolve();
            }
        }, randomDelay());
    });
}

// .then() runs each step only after the previous Promise resolves.
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.error("Coffee process failed:", error.message));

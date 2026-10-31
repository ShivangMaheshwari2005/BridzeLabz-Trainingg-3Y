// Q3 – Bug Tracker: Callback to Promise Migration

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3; // 30% chance of failure

            if (apiFailed) {
                reject(new Error("Bug tracking API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Display the returned bugs in a neat table.
getBugs()
    .then((bugs) => {
        const bugRows = bugs.map((bug, index) => ({
            "S. No.": index + 1,
            "Bug": bug
        }));
        console.table(bugRows);
    })
    .catch((error) => {
        console.error("Unable to fetch bugs:", error.message);
    });

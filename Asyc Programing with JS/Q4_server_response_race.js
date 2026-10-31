// Q4 – DevOps Delay: Async Timeout Race

function contactServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Each server has a 20% chance of failure.
            if (Math.random() < 0.2) {
                reject(new Error(serverName + " failed to respond."));
            } else {
                resolve(serverName + " responded successfully.");
            }
        }, delay);
    });
}

const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

// Promise.all waits for both servers. It rejects if either one fails.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("Deployment error:", error.message);
    });

// Promise.race settles as soon as the first Promise settles.
// In this example, Server A normally responds first (after 2 seconds).
Promise.race([serverA, serverB])
    .then((response) => {
        console.log("Fastest response:", response);
    })
    .catch((error) => {
        console.error("Fastest response failed:", error.message);
    });

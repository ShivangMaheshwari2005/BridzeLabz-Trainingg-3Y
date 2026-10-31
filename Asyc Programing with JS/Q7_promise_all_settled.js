// Q7 – The Lazy Loader: Promise Combinator Practice

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject("Profile failed to load")
                : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject("Posts failed to load")
                : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3
                ? reject("Messages failed to load")
                : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    // allSettled waits until every Promise has either fulfilled or rejected.
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(moduleNames[index] + " succeeded:", result.value);
        } else {
            console.log(moduleNames[index] + " failed:", result.reason);
        }
    });

    const totalTime = Date.now() - startTime;
    console.log("Total time taken:", totalTime, "ms");
}

loadDashboard();

// Q5 – Frontend Rush: Avoiding Callback Hell

// Helper function used by both examples.
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName);
        callback();
    }, 1000);
}

// PART 1: Nested callbacks (callback hell).
// Each stage starts only after the previous callback runs.
function runWithCallbacks() {
    console.log("Callback pipeline started");

    runStage("Design completed", () => {
        runStage("Build completed", () => {
            runStage("Test completed", () => {
                runStage("Deploy completed", () => {
                    runStage("Celebrate!", () => {
                        console.log("Callback pipeline finished");
                    });
                });
            });
        });
    });
}

// PART 2: The same pipeline using Promises and async/await.
function runStageAsPromise(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Async/await pipeline started");

    await runStageAsPromise("Design completed");
    await runStageAsPromise("Build completed");
    await runStageAsPromise("Test completed");
    await runStageAsPromise("Deploy completed");
    await runStageAsPromise("Celebrate!");

    console.log("Async/await pipeline finished");
}

// Run one example at a time to compare the output.
// Uncomment the function you want to test.

runWithCallbacks();
// runWithAsyncAwait();

/*
Why async/await improves readability:
1. The code looks like a normal step-by-step sequence.
2. It avoids deeply nested callback functions.
3. try/catch can handle errors in asynchronous code.
4. await pauses this async function until a Promise settles;
   it does not block the JavaScript event loop.
*/

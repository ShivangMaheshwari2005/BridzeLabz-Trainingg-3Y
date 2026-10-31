// Q10 – The Final Delivery: Async Pipeline Debugger

// Each step returns a Promise, waits for a random 1–2 seconds,
// and has a 15% chance of failing.
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(stepName + " failed"));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // await makes the next step wait for the current Promise.
        // The event loop can still run other tasks while each step waits.
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        // If any step rejects, control moves here and later steps are skipped.
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();

/*
Async behavior and event loop:
1. Calling deliveryStep() creates and returns a Promise.
2. setTimeout() schedules its callback for a later event-loop turn.
3. await pauses runPipeline() until that Promise settles.
4. This pause does not block the whole JavaScript thread.
5. When a Promise resolves, the async function resumes as a microtask.
6. If a Promise rejects, the error is handled by the surrounding catch block.
*/

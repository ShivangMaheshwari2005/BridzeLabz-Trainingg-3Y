// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// setTimeout callback is a macrotask (task queue).
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// Promise.then callback is a microtask (microtask queue).
Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// JavaScript first completes all synchronous code.
// After the call stack becomes empty, it processes microtasks.
// Only after the microtask queue is empty does it process macrotasks
// such as the setTimeout callback.

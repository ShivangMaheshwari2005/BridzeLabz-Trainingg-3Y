// Q6. Event-Based Counter Simulation
let count = 0;

function increment() {
  count++;
  console.log("Increment clicked -> count =", count);
}

function decrement() {
  count--;
  console.log("Decrement clicked -> count =", count);
}

// Nested function demonstrating function scope
function counterWithNested() {
  let count = 100; // local 'count' shadows the global one
  function nestedUpdate() {
    count += 10;   // updates the closest (local) count
    console.log("Nested function -> local count =", count);
  }
  nestedUpdate();
  console.log("Inside counterWithNested -> local count =", count);
}

// Simulate click events
increment();
increment();
increment();
decrement();
counterWithNested();
console.log("Global count is unaffected by nested function:", count);

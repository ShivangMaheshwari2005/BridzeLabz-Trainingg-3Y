"use strict";
// Q10 - Nested Hoisting and Closures

// 1. Original code
function outer() {
  console.log(count); // PREDICTION: undefined (outer's own 'var count' is hoisted)
  var count = 5;
  function inner() {
    console.log(count); // PREDICTION: undefined (inner's own 'var count' shadows outer's count)
    var count = 10;
  }
  inner();
}
console.log("--- Original ---");
outer();
// Output: undefined, undefined

// 2. Separate memory contexts
// Each function call creates its own execution context. Before any line runs, JS hoists
// 'var count' to the top of EACH function and sets it to undefined:
//   outer context: { count: undefined, inner: <function> }
//   inner context: { count: undefined }
// Because inner has its own 'count', it never reads outer's count (5), even though
// the closure could reach it. The local declaration shadows it.

// 3. Inner as an arrow function
function outerArrow() {
  console.log(count); // undefined (var hoisted)
  var count = 5;
  const inner = () => {
    console.log(count); // still undefined: arrow functions also get their own scope for 'var'
    var count = 10;
  };
  inner(); // must be called AFTER the const line; unlike a function declaration, it isn't usable before
}
console.log("--- Arrow inner ---");
outerArrow();
// Behaviour changes: var hoisting inside is the same, but the arrow itself is not hoisted
// as a callable function (TDZ), and arrows have no own 'this' or 'arguments'.

// Proof that the arrow is not callable before its definition:
function arrowTDZ() {
  try {
    inner();
  } catch (err) {
    console.log(`Arrow before definition -> ${err.name}: ${err.message}`);
  }
  const inner = () => {};
}
arrowTDZ();

// Closure demo: if inner had no 'var count', it would read outer's 5
function outerClosure() {
  var count = 5;
  function inner() { console.log("Closure reads outer count:", count); }
  inner();
}
outerClosure();

// 4. Debug session / call stack (VS Code: F5, breakpoint inside inner)
// Call stack when paused inside inner():
//   inner
//   outer
//   (anonymous) / Module._compile   <- file top level
// Watch: 'count' shows undefined inside inner (its own var), and Scope panel shows
// Local: count = undefined, Closure (outer): count = 5 (after outer's assignment).

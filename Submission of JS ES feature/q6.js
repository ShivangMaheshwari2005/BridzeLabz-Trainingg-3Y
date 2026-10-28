"use strict";
// Q6 - Pyramid Pattern Generator

// 3. Limit from user input (default = 5).
// Node:    node q6.js 7
// Browser: add ?n=7 to the page URL
function getLimit() {
  let raw;
  if (typeof process !== "undefined" && process.argv && process.argv[2]) raw = process.argv[2];
  else if (typeof location !== "undefined") raw = new URLSearchParams(location.search).get("n");
  const n = Number(raw);
  return Number.isInteger(n) && n > 0 ? n : 5; // fall back to the default
}
const limit = getLimit();

// ---- Version with let ----
function pyramidLet(n) {
  for (let i = 1; i <= n; i++) {          // 'let' -> i exists only inside the loop block
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
  console.log("typeof i after let-loop:", typeof i); // undefined (block scoped)
}

// ---- 1. Version with var ----
function pyramidVar(n) {
  for (var i = 1; i <= n; i++) {          // 'var' -> function scoped, hoisted to the top of the function
    var row = "";
    for (var j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
  // Observation: output is identical, but the variables LEAK out of the loop
  console.log("typeof i after var-loop:", typeof i, "| value:", i, "| j:", j);
}

console.log(`--- Pyramid with let (n = ${limit}) ---`);
pyramidLet(limit);
console.log(`--- Pyramid with var (n = ${limit}) ---`);
pyramidVar(limit);

// 2. Debug tip: put a breakpoint inside the inner loop and watch i, j, row.
// With var, the SAME i/j variables are re-used for the whole function; with let each
// iteration gets a fresh binding (matters for closures, shown below).
const withVar = [], withLet = [];
for (var a = 0; a < 3; a++) withVar.push(() => a);
for (let b = 0; b < 3; b++) withLet.push(() => b);
console.log("Closures with var:", withVar.map(f => f())); // [3,3,3]  shared variable
console.log("Closures with let:", withLet.map(f => f())); // [0,1,2]  fresh each iteration

// 4. "use strict" catches undeclared loop variables
try {
  new Function('"use strict"; for (k = 0; k < 3; k++) {}')();
} catch (err) {
  console.log(`Undeclared loop variable -> ${err.name}: ${err.message}`);
}

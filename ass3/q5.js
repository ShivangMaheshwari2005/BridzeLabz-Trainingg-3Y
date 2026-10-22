"use strict";
// Q5 - Hoisting Lab: The Sequence Trap
// (Code is wrapped in functions so hoisting rules are shown in a clean scope.)

// ---------- PART 1: Predict, then run the original code ----------
function original() {
  console.log(score);   // PREDICTION: undefined  (var hoisted, initialised to undefined)
  announce();           // PREDICTION: "Game started" (function declaration fully hoisted)
  var score = 50;       // assignment happens here
  function announce() { console.log("Game started"); }
  let status = "ready"; // let is hoisted but in Temporal Dead Zone until this line
  startGame();          // works: status is already initialised, function declaration hoisted
  function startGame() {
    console.log(status);
  }
}
console.log("--- Part 1: original code ---");
original();

/* PART 2: Memory state of each hoisted element (before any line runs)
   - score (var)          : hoisted, initialised to undefined
   - announce (function)  : hoisted with its full body -> callable anywhere in scope
   - status (let)         : hoisted but UNINITIALISED (TDZ) -> accessing it throws ReferenceError
   - startGame (function) : hoisted with full body                                            */

// The real trap: calling startGame() BEFORE the let line
function trap() {
  try {
    startGame();            // runs, but 'status' is still in the TDZ
  } catch (err) {
    console.log(`Trap -> ${err.name}: ${err.message}`);
  }
  let status = "ready";
  function startGame() { console.log(status); }
}
console.log("--- Part 2: the trap (TDZ) ---");
trap();

// ---------- PART 3: Fixed version (declare first, use after) ----------
function fixed() {
  const score = 50;
  const status = "ready";
  function announce() { console.log("Game started"); }
  function startGame() { console.log(status); }
  console.log(score);
  announce();
  startGame();
}
console.log("--- Part 3: fixed code ---");
fixed();

// ---------- PART 4: Arrow-function version ----------
// Arrow functions are stored in variables, so they are NOT callable before their line.
function arrowVersion() {
  try {
    announceArrow(); // const is in TDZ -> ReferenceError
  } catch (err) {
    console.log(`Arrow before definition -> ${err.name}: ${err.message}`);
  }
  const announceArrow = () => console.log("Game started");
  const startGameArrow = () => console.log("ready");
  announceArrow(); // works now
  startGameArrow();
}
console.log("--- Part 4: arrow functions ---");
arrowVersion();

"use strict";
// Q4 - Debugging Mystery

// 1. THE BUG: assigning to an undeclared variable.
// In sloppy mode JS silently creates a global 'greeting'. In strict mode this is
// illegal, so it throws ReferenceError: greeting is not defined.
function showMessageBuggy() {
  greeting = "Welcome"; // undeclared -> ReferenceError under "use strict"
  console.log(greeting);
}

try {
  showMessageBuggy();
} catch (err) {
  console.log(`Buggy version failed -> ${err.name}: ${err.message}`);
}

// 2. THE FIX: declare the variable with let/const.
// Scope rule change: declarations now decide where a variable lives (function scope here),
// instead of JS quietly leaking it into the global scope.
function showMessage() {
  const greeting = "Welcome"; // declared -> local to this function
  // 3. DEBUGGING: add 'greeting' to the Watch panel in VS Code; the Call Stack panel
  // will show: showMessage <- (anonymous / module) when paused here.
  debugger;
  console.log(greeting);
}
showMessage();

console.log("typeof greeting outside the function:", typeof greeting); // undefined -> no global leak

// Q8 - Strict Mode Showdown
// This file deliberately has NO top-level "use strict": the demo code is run from
// strings via new Function(), so the same code can be tested in both modes.
// (Duplicate parameters are a SyntaxError that stops a whole file from loading
// in strict mode, so they must be tested from a string to be caught.)

const body = "function demo(a, a) { total = 10; console.log('a =', a, '| total =', total); console.log('delete result:', delete total); } demo(5, 10);";

// 1a. WITHOUT strict mode
console.log("--- Sloppy mode ---");
try {
  new Function(body)();
  console.log("Sloppy mode ran without errors. 'a' became 10 (last duplicate wins),");
  console.log("'total = 10' silently created a global, and delete total removed it.");
} catch (err) {
  console.log(`Sloppy mode error -> ${err.name}: ${err.message}`);
}

// 1b. WITH strict mode (whole snippet)
console.log("--- Strict mode (whole snippet) ---");
try {
  new Function('"use strict"; ' + body)();
} catch (err) {
  console.log(`Strict mode error -> ${err.name}: ${err.message}`);
}

// 2/3. Each illegal operation tested separately
const cases = [
  ["Duplicate parameter names", '"use strict"; function demo(a, a) {} demo(1, 2);',
    "Duplicate names make it unclear which argument 'a' refers to; strict mode forbids it."],
  ["Assigning to an undeclared variable", '"use strict"; function demo() { total = 10; } demo();',
    "Typos would silently create globals; strict mode requires declarations."],
  ["delete on a variable", '"use strict"; var total = 1; delete total;',
    "delete is only meant for object properties; deleting a binding breaks optimisation/scope rules."]
];
for (const [title, code, why] of cases) {
  try {
    new Function(code)();
    console.log(`${title}: no error`);
  } catch (err) {
    console.log(`${title} -> ${err.name}: ${err.message}\n   Why: ${why}`);
  }
}

// 4. Correct ES6 version
console.log("--- Correct ES6 version ---");
function demoFixed(a, b) {           // unique parameter names
  "use strict";
  let total = 10;                    // declared variable
  console.log(`a = ${a}, b = ${b}, total = ${total}`);
  const obj = { total };
  console.log("delete on a property is fine:", delete obj.total); // delete only for properties
}
demoFixed(5, 10);

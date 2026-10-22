"use strict";
// Q7 - Smart Calculator

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
  constructor(op) { super(`Unknown operation: "${op}"`); this.name = "InvalidOperationError"; }
}

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new RangeError("Cannot divide by zero");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root": // square root of the first number
      if (a < 0) throw new RangeError("Cannot take root of a negative number");
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(op);
  }
}

console.log(`===== Calculator Summary (num1 = ${num1}, num2 = ${num2}) =====`);
// Extra tests: a negative root and an unknown operation
const tests = [
  ...operations.map(op => [op, num1, num2]),
  ["root", -9, 0],
  ["modulus", num1, num2]
];

for (const [op, a, b] of tests) {
  try {
    console.log(`${op.padEnd(9)}(${a}, ${b}) = ${calculate(op, a, b)}`);
  } catch (err) {
    console.log(`${op.padEnd(9)}(${a}, ${b}) -> ${err.name}: ${err.message}`);
  }
}

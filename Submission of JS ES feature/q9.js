"use strict";
// Q9 - JSON Audit

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
  '{"user":"Tom","age":"16"}' // extra test for the under-18 bonus filter
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNo = i + 1;
  // Debug tip: set a breakpoint here. For valid JSON, control goes try -> next iteration.
  // For '{invalid}', JSON.parse throws and control jumps straight into catch,
  // skipping the rest of the try block.
  try {
    const obj = JSON.parse(rawData[i]);
    const missing = ["user", "age"].filter(key => !(key in obj));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }
    clean.push(obj);
  } catch (err) {
    const kind = err instanceof SyntaxError ? "Invalid JSON" : "Validation error";
    errors.push({ line: lineNo, kind, message: err.message });
    console.log(`Line ${lineNo}: ${kind} -> ${err.message}`);
  }
}

console.log("\nClean entries:", clean);
console.log("Errors:", errors);

// Bonus: convert age to Number and filter out under-18 users
const adults = clean
  .map(u => ({ ...u, age: Number(u.age) }))
  .filter(u => u.age >= 18);
console.log("Adults (age >= 18):", adults);
console.log("Removed under-18 :", clean.length - adults.length);

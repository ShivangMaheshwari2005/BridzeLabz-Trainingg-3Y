"use strict";
// Q1 - Dynamic Data Parser
// Hoisting note: 'const' declarations are hoisted but stay in the Temporal Dead Zone
// until the line runs, so apiData must be declared before it is used below.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];   // valid numeric data
const invalidEntries = []; // invalid data (logged separately)

// Decides if a raw value is a usable number.
// Debug observation: Number(" ") is 0 and Number(null) is 0 (surprising!),
// so we check explicitly instead of trusting Number() alone.
function isValidNumeric(value) {
  if (value === null || value === undefined) return false;     // no data
  if (typeof value === "string" && value.trim() === "") return false; // blank string
  return Number.isFinite(Number(value));                       // rejects NaN, "100px", "true"
}

console.log("===== DETAILED REPORT =====");
for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  // 1. Convert to Number, Boolean and String forms
  const asNumber = Number(raw);
  const asBoolean = Boolean(raw); // note: Boolean("false") is true (non-empty string)!
  const asString = String(raw);

  // Conditional formatting of the status label
  if (isValidNumeric(raw)) {
    validNumbers.push(asNumber);
    console.log(`[${i}] VALID   | raw: ${JSON.stringify(raw)} | Number: ${asNumber} | Boolean: ${asBoolean} | String: "${asString}"`);
  } else {
    invalidEntries.push({ index: i, raw: raw, asNumber: asNumber });
    console.log(`[${i}] INVALID | raw: ${JSON.stringify(raw)} | Number: ${asNumber} | Boolean: ${asBoolean} | String: "${asString}"`);
  }
}

console.log("\n===== SUMMARY =====");
console.log("Valid numeric data :", validNumbers);
console.log("Invalid entries    :", invalidEntries.map(e => `#${e.index}(${JSON.stringify(e.raw)})`));
console.log(`Counts -> valid: ${validNumbers.length}, invalid: ${invalidEntries.length}`);

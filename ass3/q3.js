"use strict";
// Q3 - Transaction Validator

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

// Custom error classes so we can categorize errors by type
class NegativeAmountError extends Error {
  constructor(msg) { super(msg); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(msg) { super(msg); this.name = "MissingFieldError"; }
}
class NullTransactionError extends Error {
  constructor(msg) { super(msg); this.name = "NullTransactionError"; }
}

function validate(tx) {
  if (tx === null) throw new NullTransactionError("Transaction is null");
  if (tx.id === undefined || tx.amount === undefined) {
    throw new MissingFieldError(`Missing id or amount in ${JSON.stringify(tx)}`);
  }
  if (tx.amount < 0) throw new NegativeAmountError(`Negative amount (${tx.amount}) in transaction ${tx.id}`);
  return tx;
}

const valid = [];
const invalid = [];
const errorTypes = {}; // counts per error type

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  // BREAKPOINT: in VS Code click left of the next line (or keep this 'debugger' statement),
  // then add i, tx, valid, invalid to the Watch panel and step with F10.
  debugger;
  try {
    valid.push(validate(tx));
    console.log(`Transaction #${i}: OK`);
  } catch (err) {
    invalid.push({ index: i, type: err.name, message: err.message });
    errorTypes[err.name] = (errorTypes[err.name] || 0) + 1;
    console.log(`Transaction #${i}: FAILED -> ${err.name}: ${err.message}`);
  }
}

console.log("\n===== FINAL REPORT =====");
console.log("Valid transactions  :", valid);
console.log("Invalid transactions:", invalid);
console.log("Error type counts   :", errorTypes);
console.log(`Successful: ${valid.length} | Failed: ${invalid.length}`);

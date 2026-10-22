// Q1. Scope Conflict Resolver
var bonus = 5000; // global variable

function calculateSalary(isPermanent) { // isPermanent is local to this function
  let salary = 40000;                   // local variable
  if (isPermanent) {
    salary += bonus;                    // global bonus is accessible inside
  }
  console.log(`isPermanent = ${isPermanent} -> Total salary: ${salary}`);
  return salary;
}

calculateSalary(true);   // 45000 (bonus added)
calculateSalary(false);  // 40000 (no bonus)

// Demonstrating scope
console.log("Global bonus after both calls:", bonus); // still 5000, unchanged
console.log("Is 'salary' visible outside?", typeof salary); // undefined (local only)
console.log("Is 'isPermanent' visible outside?", typeof isPermanent); // undefined (local only)

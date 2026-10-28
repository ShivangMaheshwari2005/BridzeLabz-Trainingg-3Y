"use strict";
// Q2 - Employee Bonus Calculator
// "use strict" means a typo like 'bonuss = 5' would throw ReferenceError, not create a global.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Broken", years: "4" },              // extra test: missing salary
  { name: "BadData", salary: "abc", years: "3" } // extra test: bad conversion
];

function processEmployee(emp) {
  // Missing property check
  if (!("salary" in emp) || !("years" in emp)) {
    throw new Error(`Missing property for ${emp.name}`);
  }

  // 1. Convert strings to numbers
  const salary = Number(emp.salary);
  const years = Number(emp.years);
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert salary/years to numbers for ${emp.name}`);
  }

  // 2. Bonus rule
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { name: emp.name, salary, years, bonus };
}

for (const emp of employees) {
  try {
    const r = processEmployee(emp);
    // 4. Template string output
    console.log(`Employee: ${r.name} | Salary: ${r.salary} | Years: ${r.years} | Bonus: ${r.bonus} | Total: ${r.salary + r.bonus}`);
  } catch (err) {
    console.log(`ERROR (${err.name}): ${err.message}`);
  }
}

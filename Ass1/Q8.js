// Q8. Employee Salary Projection
let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;
let salaryReport = [];

// Calculate salary for each of the next five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;
    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: salary
    });
}

// Display yearly salary projection
console.table(salaryReport);

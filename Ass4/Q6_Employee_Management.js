// Q6: Employee annual salary, bonus, and company payout using reduce().
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * percent / 100;
  }
}

const employees = [
  new Employee(1, "Aarav", "IT", 45000),
  new Employee(2, "Meera", "HR", 38000),
  new Employee(3, "Kabir", "Finance", 42000),
  new Employee(4, "Anaya", "Sales", 35000),
  new Employee(5, "Ishaan", "IT", 50000)
];

// Apply a 5% bonus to each employee's monthly salary before calculating annual pay.
employees.forEach(employee => employee.applyBonus(5));

document.getElementById("showEmployees").addEventListener("click", () => {
  const list = document.getElementById("employeeList");
  list.innerHTML = "";

  employees.forEach(employee => {
    const item = document.createElement("li");
    item.textContent = `${employee.name} (${employee.department}) — Annual salary: ₹${employee.getAnnualSalary().toFixed(2)}`;
    list.appendChild(item);
  });

  const totalPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
  document.getElementById("totalPayout").textContent =
    `Total annual company payout: ₹${totalPayout.toFixed(2)}`;
});

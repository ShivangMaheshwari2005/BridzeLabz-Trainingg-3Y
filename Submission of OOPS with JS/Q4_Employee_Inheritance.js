class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing regular work.");
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the team.");
    }
}

const e1 = new Employee("Rahul", "IT");
const e2 = new Manager("Aman", "HR");

e1.work();
e2.work();

// Runtime polymorphism: the same method name produces
// different behavior depending on the object's class.

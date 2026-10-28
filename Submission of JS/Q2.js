// Q2. Multi-Type Data Summary
let userName = "Shivang";
let age = 20;
let isStudent = true;
let subjects = ["Java", "HTML", "CSS"];
let student = { name: "Shivang", age: 20 };
let address = null;
let phoneNumber;

// Prepare a formatted report of values and data types
let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    { Label: "Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Phone", Value: phoneNumber, Type: typeof phoneNumber }
];

console.table(report);

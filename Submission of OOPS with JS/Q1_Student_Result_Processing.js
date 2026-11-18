class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

const students = [
    new Student("Rahul", [85, 90, 80]),
    new Student("Aman", [65, 70, 60]),
    new Student("Riya", [30, 35, 40])
];

students.forEach(student => {
    console.log(
        student.name,
        "Average:", student.calculateAverage(),
        "Grade:", student.getGrade()
    );
});

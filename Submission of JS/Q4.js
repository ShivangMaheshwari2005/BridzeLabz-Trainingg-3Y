// Q4. Academic Performance Evaluator
let marks = [85, 90, 78, 88, 92];
let total = 0;
let detained = false;

// Calculate total and check if any subject mark is below 35
for (let mark of marks) {
    total += mark;
    if (mark < 35) {
        detained = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Check promotion criteria
if (detained || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}

console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Q9. Random Math Quiz Generator
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ["+", "-", "*", "/"];
let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];
let answer;

// Calculate the correct answer using a switch statement
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;
    case "-":
        answer = num1 - num2;
        break;
    case "*":
        answer = num1 * num2;
        break;
    case "/":
        answer = num1 / num2;
        break;
}

// Display the question and correct answer
console.log(`Question: ${num1} ${operator} ${num2} = ?`);
if (operator === "/") {
    console.log("Correct Answer: " + answer.toFixed(2));
} else {
    console.log("Correct Answer: " + answer);
}

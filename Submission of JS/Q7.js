// Q7. Smart Guessing Game
let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 25; // Change this test value to try different guesses

// Check the user's guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log("Secret Number: " + secretNumber);

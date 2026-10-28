// Q1. Personalized Login Greeting
let userName = "Shivang";
let currentHour = new Date().getHours();

// Display a greeting based on the current hour
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}

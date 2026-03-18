// Assignment - 1

// Takes a user's name, age, and purchaseAmount
let name = 'Suresh';
let age = 65;
let purchaseAmount = 5000;

//Applies discounts based on rules:
// If age < 18 → 10% discount
//If age ≥ 60 → 20% discount
// If purchaseAmount > 5000 → extra 5% discount

let discount = 0;

if (age < 18) {
    discount = discount + 10;
} else if (age >= 60) {
    discount = discount + 20;
}

if (purchaseAmount > 5000) {
    discount = discount + 5;
}
//Use logical operators to combine conditions
let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);

//Output a message using template literals
console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${finalAmount}`);

//Assignment - 2

//Store predefined username and password
let correctUsername = "admin";
let correctPassword = "1234";

//Ask user input (simulate with variables)
let inputUsername = "admin";
let inputPassword = "1234";

//Validate:
// Username must match
// Password must match
//Add extra condition:
// If both are wrong → "Both incorrect"
// If one is wrong → specific message

if (inputUsername === correctUsername && inputPassword === correctPassword) {
    console.log("Login successful!");
} else if (inputUsername !== correctUsername && inputPassword !== correctPassword) {
    console.log("Both incorrect");
} else if (inputUsername !== correctUsername) {
    console.log("Incorrect username");
} else {
    console.log("Incorrect password");
}

//Assignment - 3 

//Take a number as input
let num = -4;

//Check and display:
// Whether it is positive, negative, or zero
// Whether it is even or odd
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//Use arithmetic operators (%) and conditionals
let type = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
let parity = num % 2 === 0 ? "even" : "odd";
console.log(`The number ${num} is ${type} and ${parity}.`);


//Assignment - 4

//Variables:
// isMember (true/false)
// cartValue
let isMember = true;
let cartValue = 1500;

//Conditions:
// Free delivery if:
// Member AND cartValue > 1000
// OR cartValue > 2000

if ((isMember && cartValue > 1000) || cartValue > 2000) {
    console.log("You are eligible for free delivery!");
} else {
    console.log("You are not eligible for free delivery.");
}

//Assignment - 5

//Input marks (0–100)
let marks = 55;

//Assign grade:
// 90+ → A
// 75–89 → B
// 50–74 → C
// Below 50 → Fail
//Add condition:
// If marks < 0 OR > 100 → Invalid input

if (marks < 0 || marks > 100) {
    console.log("Invalid marks entered.");
}
else if (marks >= 90) {
    console.log("Your grade is A.");
} else if (marks >= 75) {
    console.log("Your grade is B.");
} else if (marks >= 50) {
    console.log("Your grade is C.");
} else {
    console.log("Fail");
}


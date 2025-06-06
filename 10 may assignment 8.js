const readline = require('readline');

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask input
const ask = (question) => new Promise(resolve => rl.question(question, ans => resolve(ans)));

// Main async function
async function runTasks() {

  // 1. Even or Odd Checker
  const num1 = parseInt(await ask("1️⃣ Enter a number (Even/Odd Check): "));
  if (num1 % 2 === 0) {
    console.log("It's Even");
  } else {
    console.log("It's Odd");
  }

  // 2. Positive, Negative, or Zero
  const num2 = parseFloat(await ask("\n2️⃣ Enter a number (Positive/Negative/Zero): "));
  if (num2 > 0) {
    console.log("Positive");
  } else if (num2 < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }

  // 3. Age-based Eligibility
  const age = parseInt(await ask("\n3️⃣ Enter your age: "));
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }

  // 4. Number Range Validator
  const rangeNum = parseInt(await ask("\n4️⃣ Enter a number (Check 10-20): "));
  if (rangeNum >= 10 && rangeNum <= 20) {
    console.log("In range");
  } else {
    console.log("Out of range");
  }

  // 5. Check Number Equality
  const a = parseInt(await ask("\n5️⃣ Enter first number: "));
  const b = parseInt(await ask("Enter second number: "));
  if (a === b) {
    console.log("Both numbers are equal.");
  } else if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else {
    console.log(`${b} is greater than ${a}`);
  }

  // 6. Simple Grading System
  const score = parseInt(await ask("\n6️⃣ Enter score (0–100): "));
  if (score >= 90) {
    console.log("Grade A");
  } else if (score >= 75) {
    console.log("Grade B");
  } else if (score >= 50) {
    console.log("Grade C");
  } else {
    console.log("Fail");
  }

  // 7. Divisibility Checker (5 and 11)
  const num3 = parseInt(await ask("\n7️⃣ Enter a number (Check divisibility by 5 and 11): "));
  if (num3 % 5 === 0 && num3 % 11 === 0) {
    console.log("Divisible by both 5 and 11");
  } else {
    console.log("Not divisible by both 5 and 11");
  }

  // 8. Largest of Three Numbers
  const x = parseInt(await ask("\n8️⃣ Enter first number: "));
  const y = parseInt(await ask("Enter second number: "));
  const z = parseInt(await ask("Enter third number: "));
  if (x >= y && x >= z) {
    console.log(`${x} is the largest`);
  } else if (y >= x && y >= z) {
    console.log(`${y} is the largest`);
  } else {
    console.log(`${z} is the largest`);
  }

  // 9. Leap Year Validator
  const year = parseInt(await ask("\n9️⃣ Enter a year: "));
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("It's a Leap Year");
  } else {
    console.log("Not a Leap Year");
  }

  // 10. Vowel or Consonant
  const char = (await ask("\n🔟 Enter a single alphabet character: ")).toLowerCase();
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
    console.log("It's a Vowel");
  } else if (char >= 'a' && char <= 'z') {
    console.log("It's a Consonant");
  } else {
    console.log("Invalid input. Not an alphabet.");
  }

  rl.close();
}

runTasks();

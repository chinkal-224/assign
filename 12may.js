// 1. Print numbers from 1 to 10 using a loop
console.log("1. Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print all even numbers from 1 to 20 using a loop
console.log("\n2. Even numbers from 1 to 20:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3. Print the square of numbers from 1 to 5
console.log("\n3. Squares of numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(`${i} squared is ${i * i}`);
}

// 4. Print the sum of numbers from 1 to 100 using a loop
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`\n4. Sum of numbers from 1 to 100 is: ${sum}`);

// 5. Print a multiplication table of 7 (up to 10 times)
console.log("\n5. Multiplication table of 7:");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// 6. Print numbers from 10 to 1 in reverse using a loop
console.log("\n6. Numbers from 10 to 1 in reverse:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 7. Print only the odd numbers between 15 and 30
console.log("\n7. Odd numbers between 15 and 30:");
for (let i = 15; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 8. Print the factorial of a number (e.g., 5! = 120) using a loop
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(`\n8. Factorial of ${number} is: ${factorial}`);

// 9. Print all numbers between 1 and 50 that are divisible by both 3 and 5
console.log("\n9. Numbers between 1 and 50 divisible by both 3 and 5:");
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// 10. Count how many numbers between 1 and 100 are divisible by 9
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 9 === 0) {
    count++;
  }
}
console.log(`\n10. Count of numbers between 1 and 100 divisible by 9: ${count}`);
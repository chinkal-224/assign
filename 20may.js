const user = { names: "Alice", ages: 25, city: "New York" };
const { names, ages } = user;
console.log(names); // Alice
console.log(ages);  // 25



const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor);  // red
console.log(secondColor); // green



const person = { name: "Bob", age: 30 };
const { name, age, country = "USA" } = person;
console.log(country); // USA



const employee = {
  name: "Eve",
  address: {
    city: "Chicago",
    zip: "60601"
  }
};
const { address: { city } } = employee;
console.log(city); // Chicago




let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1



function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10



const fruits = ["apple", "banana"];
const berries = ["blueberry", "strawberry"];
const allFruits = [...fruits, ...berries];
console.log(allFruits); // ['apple', 'banana', 'blueberry', 'strawberry']




const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }



const original = [1, 2, 3];
const clone = [...original];
console.log(clone); // [1, 2, 3]




function showUser({ name }, ...hobbies) {
  console.log(`${name}'s hobbies: ${hobbies.join(", ")}`);
}
const users = { name: "Alice", age: 25 };
showUser(users, "reading", "cycling", "gaming");
// Output: Alice's hobbies: reading, cycling, gaming



const now = new Date();
console.log(now); // Current date and time




const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are 0-based
console.log(`Year: ${year}, Month: ${month}`);



const futureDate = new Date(2025, 0, 1); // January = 0
const formatted = futureDate.toISOString().split("T")[0];
console.log(formatted); // 2025-01-01



const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum); // Random number between 1 and 100



const numbers = [23, 89, 4, 56, 12];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(`Max: ${max}, Min: ${min}`); // Max: 89, Min: 4

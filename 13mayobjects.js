function getObjectKeys(obj) {
  return Object.keys(obj);
}

// Example:
console.log(getObjectKeys({ name: "Alice", age: 25 })); 
// Output: ["name", "age"]




function filterByProperty(arr, key, value) {
  let result = [];
  for (let obj of arr) {
    if (obj[key] === value) {
      result.push(obj);
    }
  }
  return result;
}

// Example:
let people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Carol", role: "admin" }
];

console.log(filterByProperty(people, "role", "admin"));
// Output: [{ name: "Alice", role: "admin" }, { name: "Carol", role: "admin" }]



function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Example:
let a = { name: "Alice", age: 25 };
let b = { age: 30, city: "New York" };

console.log(mergeObjects(a, b));
// Output: { name: "Alice", age: 30, city: "New York" }



function countProperties(obj) {
  return Object.keys(obj).length;
}

// Example:
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
// Output: 3



function sortByKey(arr, key) {
  return arr.sort(function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

// Example:
let users = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 }
];

console.log(sortByKey(users, "name"));
// Output: sorted by name: Alice, Bob, Charlie





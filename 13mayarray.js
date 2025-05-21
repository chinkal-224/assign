function sumEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

// Example:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12




function doubleArray(arr) {
  let result = [];
  for (let num of arr) {
    result.push(num * 2);
  }
  return result;
}

// Example:
console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]




function secondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax;
}

// Example:
console.log(secondLargest([10, 5, 8, 20, 15])); // Output: 15




function removeDuplicates(arr) {
  let result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

// Example:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]



function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n; // In case k > n
  let rotated = arr.slice(-k).concat(arr.slice(0, n - k));
  return rotated;
}

// Example:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]



function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Swap elements
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    left++;
    right--;
  }

  return arr;
}

// Example:
console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]



function stringLengths(arr) {
  let lengths = [];
  for (let str of arr) {
    lengths.push(str.length);
  }
  return lengths;
}

// Example:
console.log(stringLengths(["apple", "banana", "kiwi"])); // Output: [5, 6, 4]

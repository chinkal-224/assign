function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z]/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

// Example:
console.log(isPalindrome("Madam")); // true



function countVowelsAndConsonants(str) {
  let vowels = "aeiou";
  let vCount = 0;
  let cCount = 0;

  str = str.toLowerCase();

  for (let char of str) {
    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) {
        vCount++;
      } else {
        cCount++;
      }
    }
  }

  return { vowels: vCount, consonants: cCount };
}

// Example:
console.log(countVowelsAndConsonants("Hello World")); 
// Output: { vowels: 3, consonants: 7 }



function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let result = [];

  for (let word of words) {
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}

// Example:
console.log(capitalizeWords("hello world")); // Output: "Hello World"



function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = words.reverse();
  return reversed.join(" ");
}

// Example:
console.log(reverseWords("I love JavaScript")); // Output: "JavaScript love I"



function mostFrequentChar(str) {
  let counts = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    if (char === ' ') continue;
    counts[char] = (counts[char] || 0) + 1;

    if (counts[char] > maxCount) {
      maxCount = counts[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Example:
console.log(mostFrequentChar("javascript rocks")); // Output: "s"




function areAnagrams(str1, str2) {
  let clean1 = str1.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
  let clean2 = str2.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
  return clean1 === clean2;
}

// Example:
console.log(areAnagrams("listen", "silent")); // true




function removeNonAlphabetic(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}

// Example:
console.log(removeNonAlphabetic("Hello, World! 123")); // Output: "HelloWorld"

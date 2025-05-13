//leap year
let year = prompt("Enter a year:");

year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

//vowel and consonant
let letter = prompt("Enter a single alphabet character:");

letter = letter.toLowerCase();
if (letter.length === 1 && letter >= 'a' && letter <= 'z') {

  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    alert(letter + " is a vowel.");
  } else {
    alert(letter + " is a consonant.");
  }
} else {
  alert("Please enter a single alphabet letter only.");
}
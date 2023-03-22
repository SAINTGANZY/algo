let sentence = "";
let word_count = 0;
let vowel_count = 0;
let sentence_length = 0;

let input = prompt("Enter a sentence that ends with a period:");

for (let i = 0; i < input.length; i++) {
  let char = input.charAt(i);
  sentence += char;
  sentence_length++;

  if (char === " ") {
    word_count++;
  } else if (/[aeiouAEIOU]/.test(char)) {
    vowel_count++;
  }
}

// Increment word_count to account for the last word in the sentence
word_count++;

console.log("The length of the sentence is " + sentence_length);
console.log("The number of words in the sentence is " + word_count);
console.log("The number of vowels in the sentence is " + vowel_count);

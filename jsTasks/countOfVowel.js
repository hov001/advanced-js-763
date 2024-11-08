function countVowels(sentence = "") {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  let countOfVowels = 0;

  for (const char of sentence) {
    if (vowels[char.toLocaleLowerCase()]) {
      countOfVowels++;
    }
  }

  return countOfVowels;
}

// function countVowels2(sentence = "") {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let countOfVowels = 0;

//   for (const char of sentence) {
//     if (vowels.includes(char.toLocaleLowerCase())) {
//       countOfVowels++;
//     }
//   }

//   return countOfVowels;
// }

console.log(countVowels2("Hello World")); // Output: 3
console.log(countVowels2("JavaScript")); // Output: 3
console.log(countVowels2("OpenAI")); // Output: 4

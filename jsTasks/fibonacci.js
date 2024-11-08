function generateFibonacci(number) {
  if (number === 0) return [0];
  if (number === 1) return [1];

  const fibNumbers = [0, 1];

  let start = 2;

  while (start <= number) {
    const len = fibNumbers.length;
    const currNumber = fibNumbers[len - 1] + fibNumbers[len - 2];

    if (currNumber <= number) {
      fibNumbers.push(currNumber);
    }

    start = currNumber;
  }

  return fibNumbers;
}

console.log(generateFibonacci(15)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8]
console.log(generateFibonacci(50)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(generateFibonacci(1)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

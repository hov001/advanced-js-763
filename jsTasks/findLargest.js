function findLargest(numbers = []) {
  // version 1
  return numbers.reduce((acc, number) => {
    if (number > acc) return number;

    return acc;
  }, -Infinity);

  // version 2
  // return Math.max(...numbers); // O(n)
}

findLargest([1, 3, 5, 7, 9]); // Output: 9
findLargest([-10, -5, 0, 5, 10]); // Output: 10
findLargest([34, 23, 12, 56, 89]); // Output: 89

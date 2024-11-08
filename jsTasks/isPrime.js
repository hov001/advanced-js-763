function isPrime(n) {
  if (n <= 1) return;
  if (n < 4) {
    return true;
  }

  for (let i = 2; i * i < n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2)); // Output: true
// isPrime(10); // Output: false
// isPrime(13); // Output: true

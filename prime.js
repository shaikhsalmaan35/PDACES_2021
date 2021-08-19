const isPrime = (num) => {
  const boundry = num / 2;
  for (i = 2; i < boundry; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime(14 % 3));

console.log(isPrime(11));
console.log(isPrime(17));
console.log(isPrime(15));

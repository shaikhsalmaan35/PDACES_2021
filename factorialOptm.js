const factorial = (num) => (num < 2 ? 1 : num * factorial(num - 1));

console.log(factorialOptm(5));
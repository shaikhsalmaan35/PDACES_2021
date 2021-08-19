// const marks = (Number) => Number.reduce((a, b) => a + b, 0) / Number.length;

// console.log(percent([45, 25, 85, 75, 48]));

// console.log(percent([48, 78, 96, 48, 75]));

// console.log(percent([35, 56, 87, 95, 78, 58, 79, 78, 99]));

// ---------Optm way-------Sir Method------

const marks = (numbers) =>
  numbers.reduce((acc, curr) => acc + curr) / numbers.length;

console.log(marks([45, 25, 85, 75, 48]));

console.log(marks([48, 78, 96, 48, 75]));

console.log(marks([35, 56, 87, 95, 78, 58, 79, 78, 99]));

const percent = (Number) => {
  let TotalOfNumbers = 0;
  Number.forEach((element) => {
    TotalOfNumbers = TotalOfNumbers + element;
  });
  const average = TotalOfNumbers / Number.length;
  return average;
};
console.log(percent([45, 25, 85, 75, 48]));

console.log(percent([48, 78, 96, 48, 75]));

console.log(percent([35, 56, 87, 95, 78, 58, 79, 78, 99]));

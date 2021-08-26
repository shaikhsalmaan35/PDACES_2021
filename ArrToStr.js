const arr = [null, 2, 3, 4, "cat", { num: 25 }, undefined, 2];

const result = arr
  .filter((item) => typeof item === "number" && item) //any typeof data type 1.number 2.string 3.object
  .reduce((acc, num) => acc + num);
console.log(result);

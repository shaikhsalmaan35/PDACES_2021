const arr = [null, 2, 3, 4, "cat", { num: 25 }, undefined, 2];

const result = arr
  .filter((item) => typeof item === "object" && item)
  .reduce((acc, num) => acc + num);
console.log(result);

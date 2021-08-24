const CountsOfChar = (str) => {
  const arrStr = str.split("");
  const newObj = {};

  // console.log("before-----", newObj["a"]);  //-----undefined

  // newObj["a"] = 5;

  // console.log("after-----", newObj["a"]++);  //-----acess to element

  arrStr.forEach((element) => {
    newObj[element] === undefined ? (newObj[element] = 1) : newObj[element]++;
  });

  return newObj;
};
console.log(
  CountsOfChar("mine of success is dependnon your success 1 2 3 5 4 1 2 5 ")
);

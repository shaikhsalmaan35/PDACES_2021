const revStr = (str) => {
  const arrStr = str.split(" ");
  const newArr = [];
  for (i = arrStr.length - 1; i >= 0; i--) {
    newArr.push(arrStr[i]);
  }
  return newArr.join(" ");
};
console.log(revStr("I AM Fine"));
console.log(revStr("5 4 3 2 1"));

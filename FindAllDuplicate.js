const FindAllDuplicate = (myArr) => {
  const dupArr = [];
  myArr.forEach((elem, index) => {
    myArr.indexOf(elem) !== index && dupArr.push(elem);
  });
  return dupArr;
};
console.log(
  FindAllDuplicate([2, 5, 6, 2, 6, 5, 4, 8, 1, 5, 15, 8, 5, 15, 78, 89, 1])
);

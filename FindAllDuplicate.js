const FindAllDuplicate = (arr) => {
  const newArr = [];
  arr.forEach((element, index) => {
    arr.indexOf(element) !== index && newArr.push(element);
  });
  return newArr;
};
console.log(
  FindAllDuplicate([2, 5, 6, 2, 6, 5, 4, 8, 1, 5, 15, 8, 5, 15, 78, 89, 1])
);

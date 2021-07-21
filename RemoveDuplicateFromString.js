const RemoveDuplicateFromString = (str) => {
  const arrStr = str.split(" ");
  const uniqueArr = [...new Set(arrStr)];
  return uniqueArr.join(" ");
};

console.log(RemoveDuplicateFromString("I am Good. I want to go . I am fine "));
console.log(RemoveDuplicateFromString("1 2 5 3 5 8 7 8 9 1 2 3 5 4 4 5 6  "));

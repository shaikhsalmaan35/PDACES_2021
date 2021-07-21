const RemoveDuplicateFromString = (str) => {
  const arrStr = str.split(" ");
  const uniqueArr = [...new Set(arrStr)];
  return uniqueArr.join(" ");
};

console.log(RemoveDuplicateFromString("I am Good. I want to go . I am fine "));

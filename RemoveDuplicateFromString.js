const RemoveDuplicateFromString = (str) => {
  const arrStr = str.split(" ");
  const uniqueArr = [...new Set(arrStr)];
  return uniqueArr.join(" ");
};

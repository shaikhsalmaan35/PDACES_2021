const FindSortedUniqueArray = () => {
  let mergedArr = [];
  objArr.data.forEach((element) => {
    mergedArr = [...mergedArr, ...element];
  });
  const uniqueArr = [...new Set(mergedArr)].sort((a, b) => a - b);
  return uniqueArr;
};

console.log(
  FindSortedUniqueArray({
    data: [
      [15, 45, 18, 42, 18],
      [15, 28, 32, 16, 2],
      [2, 5, 6, 12],
    ],
  })
);

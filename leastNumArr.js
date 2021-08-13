const leastNumArr = (arrNum) => {
    let minNum = arrNum[0];
    arrNum.forEach((element) => {
        if (element < minNum) {
            minNum = element;
        }

    });
    return minNum;
}
console.log(leastNumArr([7, 5, 8, 25, 75, 1, 8, 99, 3]));
const greatestNumArr = (arrNum) => {
    let maxNum = 0;
    arrNum.forEach((element) => {
        if (element > maxNum) {
            maxNum = element;
        }

    });
    return maxNum;
}
console.log(greatestNumArr([7, 5, 8, 252, 75, 1, 8, 99, 3]));
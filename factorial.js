// const factorial = (Num) => {
//     if (Num == 0) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// console.log(factorial(5));

const factorial = (num) => {
    for (let i = num; i > 0; i--); {
        num = num * i;
    }
    return num;
};
console.log(factorial(3));
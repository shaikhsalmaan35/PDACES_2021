let firstIndex = 0;
let lastIndex = 0;
const findExist = (arrNum, findNum) => {
    const mid = Math.floor((firstIndex + lastIndex) / 2);
    if (arrNum[mid] === findNum) {
        return mid;
    }
}





















// const bisetionAlgo = (arrNum, findNum) => {
//     let firstIndex = 0;
//     let lastIndex = arrNum.length - 1;
//     let mid = math.floor((firstIndex + lastIndex) / 2);
//     if (arrNum[mid] === findNum) {
//         return mid;
//     } else {
//         lastIndex = mid;
//     }
// }

// console.log(bisetionAlgo([2, 4, 5, 7, 8, 11, 45, 77, 120, 120, 145], 120));
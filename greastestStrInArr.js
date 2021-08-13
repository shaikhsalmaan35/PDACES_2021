//-------sirf number print karne k liye-----//
// const greastestStrInArr = (arrStr) => {
//     let maxStr = arrStr[0].length;

//     arrStr.forEach((element) => {
//         if (maxStr < element.length) maxStr = element.length;
//     });
//     return maxStr;
// }
// console.log(greastestStrInArr(["cat", "bat", "dog", "Boot", "React", "Salman", "Aamer"]))


// -----------string value print karne k liye----------//
const greastestStrInArr = (arrStr) => {
    let maxStr = arrStr[0].length;
    let strData = arrStr[0].length;
    arrStr.forEach((element) => {
        if (maxStr < element.length) {
            maxStr = element.length
            strData = element;
        }
    });
    return strData;
}
console.log(greastestStrInArr(["cat", "bat", "dog", "Boot", "React", "Salman", "Aamer"]))
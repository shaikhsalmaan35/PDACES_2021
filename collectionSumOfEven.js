// --------------------OddNumber--------------------------
const collectionSumOfEven=(number)=>{
    let sum=0;
    number.forEach((element)=>{
        element%2===1 && (sum=sum+element);
        
    });
    return sum;
}
console.log(collectionSumOfEven([5,2,7,9,10,8,17,115,10]));

// -----------------------EvenNO------------------------------

const collectionSumOfEven=(number)=>{
    let sum=0;
    number.forEach((element)=>{
        element % 2 === 0 && (sum=sum+element);
    });
}
console.log(collectionSumOfEven([5,2,7,9,10,8,17,115,10]));

// ----------------------------------Even ANd Odd----------------------------------------





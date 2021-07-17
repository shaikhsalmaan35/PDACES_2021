const collectionSumOfEven=(number)=>{
    let sum=0;
    number.forEach((element)=>{
        sum=sum+element;
    });
    return sum;
}
console.log(collectionSumOfEven([5,2,7,9,10,8,17,115,10]));
const FencingForTotal=(edges,numerOfWire,rate)=>{
    let sum=0;
    edges.forEach((element)=>{
        sum=sum+element;

    });
    return sum * numerOfWire* rate;
}
console.log(FencingForTotal([20,45,10], 5,10));

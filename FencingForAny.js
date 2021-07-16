const FencingForAny=(edges,numerOfWire,rate)=>{
    let sum=0;
    for(let i=0;i<edges.length;i++){
        sum = sum + edges[i];

    }
    return sum;
};
console.log(FencingForAny ([10,15,10,10,10,10,22],5,10));
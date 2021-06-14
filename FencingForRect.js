const FencingForRect=(b,w, numberOfWire, costPerFeet)=>{
    const parimeter = b+w+b+w;
    const totalCost = parimeter*numberOfWire*costPerFeet;
    return totalCost;

}
console.log(`${(FencingForRect(20,30))}`);
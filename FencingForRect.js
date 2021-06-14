const FencingForRect=(b,w, numberOfWire, costPerFeet)=>{
    const parimeter = b+w+b+w;
    const totalCost = parimeter*numberOfWire*costPerFeet;
    return totalCost;

}
console.log(`Total cost for Fencing is Rs. ${(FencingForRect(40,60,7,12))}`);
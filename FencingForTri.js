const FencingForTri=(h,b,a, numberOfWire, costPerFeet)=>{
    const parimeter = h+b+a;
    const totalCost = parimeter*numberOfWire*costPerFeet;
    return totalCost;

}
console.log(`Total cost for Fencing is Rs. ${(FencingForTri(10,12,18,5,10))}`);
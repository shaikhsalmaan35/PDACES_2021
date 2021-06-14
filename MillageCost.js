const MillageCost=(distance, Millage, FuelPrice)=>
Math.round((distance/Millage)*FuelPrice);

console.log(`Amount need to fill Fuel is Rs.${MillageCost(304,42,109.08)}`);


console.log(Math.round(12.44));
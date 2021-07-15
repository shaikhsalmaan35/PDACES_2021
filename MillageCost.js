const MillageCost=(distance, Millage, FuelPrice)=>
(distance/Millage)*FuelPrice;

console.log(`Amount need to fill Fuel is Rs.${MillageCost(300,42,109.08)}`);
const areaOfRect = (l, b) => l * b;
//hoisting are allow in case of var declaration
let result;
result = areaOfRect(150, 50);
result = areaOfRect(40, 50);
result = areaOfRect(10, 50);
result = areaOfRect(70, 50);
// var result;
console.log(result);

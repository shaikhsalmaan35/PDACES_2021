const AddNumbersOpt = (num1 , num2) => num1 +num2;
const SubNumbersOpt = (num1 , num2) => num1 - num2;

console.log(AddNumbersOpt(3,5));

console.log("sum of  given numbers are" + AddNumbersOpt(15,10));

console.log(`=========
Sum of 
30 + 60 = ${AddNumbersOpt(30 , 60)}
30 - 60 = ${SubNumbersOpt(30 , 60)}
=========================`)

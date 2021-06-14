const BiggerNumMultiOpt=(num1,num2,num3,num4,num5)=>
    Math.mix(num1,num2,num3,num4,num5);
//     {let BigNum=0;

//      BigNum = (num1>num2) ? num1 : num2;
//      BigNum = (BigNum>num3) ? BigNum:num3;
//      BigNum = (BigNum>num4) ? BigNum : num4;
//      BigNum = (BigNum>num5) ? BigNum : num5;

//      return BigNum;
// };

console.log(`Bigger Number is ${BiggerNumMultiOpt(25,56,78,28,109)}`);


const AreaOfRectangle = (b,w) => b * w ;

console.log(`Area of Rectangle is ${(10,20)}`);


const AreaOfTringle = (b,h)=> (1/2) * b * h;
 
console.log(`Area of Rectangle is ${AreaOfRectangle(10 , 20)}sq. unit`);

console.log(`Area of tringle is ${AreaOfTringle(10 , 20)}sq. unit`);

const x = 10;
const b = 15;
const h = 30;

console.log(
    `Area of Diagram III is ${AreaOfRectangle(x,b)+ AreaOfTringle(b,h-x)}`
    );

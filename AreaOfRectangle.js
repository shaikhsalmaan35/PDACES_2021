// const AreaOfRectangle = (b,w) => b * w ;

// console.log(`Area of Rectangle is ${(10,20)}`);


// const AreaOfTringle = (b,h)=> (1/2) * b * h;
 
// console.log(`Area of Rectangle is ${AreaOfRectangle(10 , 20)}sq. unit`);

// console.log(`Area of tringle is ${AreaOfTringle(10 , 20)}sq. unit`);

// const x = 10;
// const b = 15;
// const h = 30;

// console.log(
//     `Area of Diagram III is ${AreaOfRectangle(x,b)+ AreaOfTringle(b,h-x)}`
//     );




const b=27;
const h=14;
const r1=7;
const r2=5;
const x=12;

const AreaOfRectangle =(b,h)=> b * h;
const AreaOfT=(b,x)=>.5*b*x;
const AreaOfR1=(r1)=>(22/7)* r1 ** 2;
const AreaOfR2=(r2)=>(22/7)* r2 ** 2;
area = AreaOfRectangle(27,14)+AreaOfT(27,12)+AreaOfR1(7)+AreaOfR2(5);
console.log(area)


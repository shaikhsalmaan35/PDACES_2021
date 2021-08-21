const arr1=[1,undefined,"salman",3,5,{},"cat",556644,]

const arr2=[];

arr1.forEach((element)=>{
    if(typrof element === "string"){
        arr2.push(element.toUperCase());
    }
});

console.log(arr2);
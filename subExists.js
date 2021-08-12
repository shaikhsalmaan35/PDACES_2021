
// const subExists =(str)=>{
// const arrStr=str.split("");
// console.log(arrStr);
// };
// const strData= "lorem10"

// subExists(strData);

const subExists =(str)=>{
const arrStr=str.split("");

let cnt = 0;
arrStr.forEach((element) => {
    if(element.toUpparCase()=== "Lorem".topUpparCase()){
        cnt = cnt+1;
    }
    
});
// console.log(arrStr);
return cnt;
};
const strData= "lorem Iqusm is simply dummy text of the printingand typesetting industry.Lorem is simply dummy text ofthe printingand typestting industry "

console.log( subExists(strData));
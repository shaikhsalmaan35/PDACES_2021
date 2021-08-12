const subExistsOptm=(str)=>{
    return str.split(" ").filter((item)=> item === "Lorem").length;
};

const strData="Lorem lorem Iqusm is simply dummy text of the printingand typesetting industry.Lorem is simply dummy text ofthe printingand typestting industry "
console.log(subExistsOptm(strData));
const palendromeOptm=(str)=>{
return (str===str.split("").reverse().join(""));
};
console.log(palendromeOptm("987789"));
// ------const use karemge toh over right---Identifier 'getName' has already been declared

const getName = (fname, lname) => {
  return fname + " " + lname;
};
const getName = (fname, mname, lname) => {
  return fname + " " + mname + " " + lname;
};
console.log(getName("salman", "shaikh"));
console.log(getName("salman", "shaikh", "sam"));

//-----agar var use karenge toh second function call------
//-----Answer------1st line :-salman shaikh undefined
// 2nd line :- salman shaikh sam

var getName = (fname, lname) => {
  return fname + " " + lname;
};
var getName = (fname, mname, lname) => {
  return fname + " " + mname + " " + lname;
};
console.log(getName("salman", "shaikh"));
console.log(getName("salman", "shaikh", "sam"));

// -------Anser----Number
// console.log(typeof 1);

// ---Answer----String----
// console.log(typeof typeof 1);

// -----Anser---(11)-------
// console.log(1 + "1");

// -------Answer-------2----
// console.log(1 + 1);

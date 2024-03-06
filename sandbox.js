var charactor = "Mario";
console.log(charactor);
var username = "Dinomanh";
console.log(username);
var inputs = document.querySelectorAll("input");
console.log(inputs);
// compile typescript to javascript
// tsc sandbox.ts 
// tsc sandbox.ts -w : auto compile TS down to JS when save 
// inputs.forEach(input => {
//     console.log(input);
// });
//Type Basics 
var char = "mario";
var age = 30;
var isAdmin = true;
// char = 20;// Type 'number' is not assignable to type 'string'
char = "Dinomanh 2"; //Correct
//age = "Dinomanh" // Type 'string' is not assignable to type 'number'
age = 45; //Correct
//isAdmin = 'yes';//Type 'string' is not assignable to type 'boolean'.
isAdmin = false;
//function without define type for argument
// const circle = (diameter)=>{
//      return diameter * Math.PI;
// }
// console.log(circle('Hello world')); // Not Error -> return NaN: Not a Number
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(7.5)); // Show Error if pass string argument
//If Error Occured in TS. It won't complied down to JS

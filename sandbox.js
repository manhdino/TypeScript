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
//Object & Arrays 
//Arrays 
var names = ['manh', 'minh', 'hoang'];
names.push('kien'); //OK
//names.push(2); //Argument of type 'number' is not assignable to parameter of type 'string'
var numbers = [1, 2, 3, 4, 5];
// umbers.push("dinomanh");//Argument of type 'string' is not assignable to parameter of type 'number'
//mixed arrays
var mixed = ['ken', 4, 'dinomanh', 8, 9, true];
mixed.push("mixed"); //OK
mixed.push(9); //OK
mixed.push(false); //OK
mixed[0] = 3; //OK 
console.log('mixed: ', mixed);
//Objects
var ninja = {
    name: "marios",
    age: 24,
    isAdmin: false,
    addresse: "HN"
};
//ninja.name = 24;// Argument of type 'string' is not assignable to parameter of type 'number'
ninja.age = 40;
console.log('object ninja', ninja);
//add extra properties
// ninja.skill = ['Fighting','Sneaking']; //Error 
// When you overwrite object you must add full properties 
// Error missing addresses properties
// ninja = {
//     name: "marios",
//     age:24,
//     isAdmin:false,
// };

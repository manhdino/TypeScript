"use strict";
const charactor = "Mario";
console.log(charactor);
const username = "Dinomanh";
console.log(username);
const inputs = document.querySelectorAll("input");
console.log(inputs);
// compile typescript to javascript
// tsc sandbox.ts
// tsc sandbox.ts -w : auto compile TS down to JS when save
// inputs.forEach(input => {
//     console.log(input);
// });
//Type Basics
let char = "mario";
let age = 30;
let isAdmin = true;
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
const circle = (diameter) => {
  return diameter * Math.PI;
};
console.log(circle(7.5)); // Show Error if pass string argument
//If Error Occured in TS. It won't complied down to JS
//Object & Arrays
//Arrays
let names = ["manh", "minh", "hoang"];
names.push("kien"); //OK
//names.push(2); //Argument of type 'number' is not assignable to parameter of type 'string'
let numbers = [1, 2, 3, 4, 5];
// umbers.push("dinomanh");//Argument of type 'string' is not assignable to parameter of type 'number'
//mixed arrays
let mixed = ["ken", 4, "dinomanh", 8, 9, true];
mixed.push("mixed"); //OK
mixed.push(9); //OK
mixed.push(false); //OK
mixed[0] = 3; //OK
console.log("mixed: ", mixed);
//Objects
let ninja = {
  name: "marios",
  age: 24,
  isAdmin: false,
  addresse: "HN",
};
//ninja.name = 24;// Argument of type 'string' is not assignable to parameter of type 'number'
ninja.age = 40;
console.log("object ninja", ninja);
//add extra properties
// ninja.skill = ['Fighting','Sneaking']; //Error
// When you overwrite object you must add full properties
// Error missing addresses properties
// ninja = {
//     name: "marios",
//     age:24,
//     isAdmin:false,
// };
//Explicit Types
// We want to initialize a variable without giving it a value
// When we want to give the value in the future
let str;
let statusCode;
let isLoggedIn;
// age = 'Dinomanh'; // Error
// isLoggedIn = false; // Error
//Arrays
let ninjas = []; // array of strings
// ninjas = [10,20]; // Error
// If you don't initialize ninjas as a empty array
// then you can't use methods push because it's undefined not empty string
// mixed array --> use Union Types: (string|number)
let mixedArr = [];
mixedArr.push("hello world"); //OK
mixedArr.push(20); //OK
//mixedArr.push(false); // Error
console.log(mixedArr);
// Unions Type for variable
let userId;
userId = "12343";
userId = 1234;
// userId = false; // Error
//Unions Type for an Object
let ninjaOne;
ninjaOne = { name: "Yoshi", age: 30 };
// ninjaOne = "Yoshi"; // Error beacuse it's an object
let ninjaTwo;
ninjaTwo = { name: "Yoshi", age: 24, isAdmin: false };
// Dynamic(any) Types
// This variable would be any type in the future
// Any point of time you can change  type too
let ageAny = 25;
console.log(ageAny);
ageAny = "Dinomanh";
console.log(ageAny);
ageAny = { name: "Dinomanh" };
console.log(ageAny);
let mixedAnyArr = [];
mixedAnyArr.push(5);
mixedAnyArr.push("dinomanh");
mixedAnyArr.push(true);
console.log(mixedAnyArr);
let ninjaAny;
ninjaAny = { name: "Yoshi", age: 25, isAdmin: false };
console.log(ninjaAny);
ninjaAny = { name: 25, age: "Yoshi", isAdmin: false };
console.log(ninjaAny);
//tsc --init : Initialized tsconfig.json

console.log("Testing 1 2 3");

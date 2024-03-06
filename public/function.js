"use strict";
// let greet = () =>{
//     console.log("Hello World!");
// }
//greet = "Hello World!";// Error because It's type Function
//Explicit Function
let greet;
greet = () => {
    console.log("hello world!");
};
const add = (a, b, c, d = 10) => {
    console.log(a + b);
    console.log(c);
    console.log(d); //default value 10
};
add(5, 10);
//add(4,'10');//Error
//add();//Error missing agruments
// Solution c?:number -> make agrument is optional
add(5, 10); //OK c: undefined type
//when use default parameter or optional parameter, should put 
// in the end of list of agruments in the function
//fucntion return value - type of return value will be the type of result 
const minus = (a, b) => {
    return a - b;
};
let res = minus(10, 7); // type of res will be exact type of
const greetHello = (userId, user) => {
    console.log(userId, user);
};
//Function Signature: describe the general structure of function
// what arguments or type of data returns
let greetSignature;
greet = (name, message) => {
    console.log(`${name} says ${message}`);
};
let calc;
calc = (numOne, numTwo, operator) => {
    if (operator === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetails({ name: "Dinomanh", age: 34 });

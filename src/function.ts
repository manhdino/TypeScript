// let greet = () =>{
//     console.log("Hello World!");
// }

//greet = "Hello World!";// Error because It's type Function

//Explicit Function
let greet: Function;

greet = () =>{
    console.log("hello world!");
}

const add = (a:number,b:number,c?:number|string ,d:number = 10) =>{
    console.log(a+b);
    console.log(c);
    console.log(d);//default value 10
}

add(5,10);
//add(4,'10');//Error

//add();//Error missing agruments
// Solution c?:number -> make agrument is optional
add(5,10);//OK c: undefined type
//when use default parameter or optional parameter, should put 
// in the end of list of agruments in the function

//fucntion return value - type of return value will be the type of result 


const minus = (a:number, b:number):number =>{
    return a - b;
}

let res = minus(10,7); // type of res will be exact type of
// return value of return a - b;
// In this case res will be number type

// res = "dinomanh";// Error because res already declared as number type

// If function not have key "return", it will return void type


// Type Alias: a void reapted code when defined argument in function repeatedly
type StringOrNum = string|number;
type objWithName = {name:string,uid:StringOrNum}

const greetHello = (userId:StringOrNum,user:objWithName) =>{
    console.log(userId,user);
}


//Function Signature: describe the general structure of function
// what arguments or type of data returns
let greetSignature: (a:string,b:string) =>void;

greet = (name:string,message:string) =>{
    console.log(`${name} says ${message}`);
}

let calc: (a:number,b:number,c:string) => number;
calc = (numOne:number,numTwo:number,operator:string) =>{
   if(operator === 'add'){
    return numOne + numTwo;
   }else{
    return numOne - numTwo;
   }
}

let logDetails: (obj:{name:string,age:number}) =>void

type person = {name:string,age:number};

logDetails = (ninja:person) =>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetails({name:"Dinomanh",age:34});



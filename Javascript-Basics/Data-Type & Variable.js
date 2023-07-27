//Variables are containers for storing data
//in JavaScript we can use this variable [ Var, Let, Const ]

//Var
var name = "Meet";
{
    var name = "Patel";
    console.log(name);
}
console.log(name);
//Output of both console: Patel

//Let
let name = "Meet";
{
    let name = "Patel";
    console.log(name);
}
console.log(name);
//first output is: Patel
//second output is: Meet

//Const
const name = "Meet";
{
    const name = "Patel";
    console.log(name);
}
console.log(name);
//first output is: Patel
//second output is: Meet
//but in const key point is we always declare in line value.

//----------------------------------------------------


/* In JavaScript has 8 Types of Datatypes  
  1. String 
  2. Number
  3. Bigint 
  4. Boolean  
  5. Undefined  
  6. Null 
  7. Object
  8. Symbol  */

  // InPut
let forString = "Hello js Developer";
let forNumber = 123;
let forBigInt = BigInt("1897456146125");
let forBoolean = false;
let forUndefine = undefined;
let forNull = null;
let object = { myName: "Meet" }
const name = Symbol("Meet");

// OutPut
console.log(forString);
console.log(forNumber);
console.log(forBigInt);
console.log(forBoolean);
console.log(forUndefine);
console.log(forNull);
console.log(object);
console.log(name); // in console write only name







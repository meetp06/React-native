/* In JavaScript has 3 types of scope:

Block scope
Function scope
Global scope */

//1. Block scope
{
    var digit = 46;
    console.log(digit);
}

//2. Function scope
function myFunction() {
    let carName = "Swift";
}

//3. Global scope
var x = 2; 
let x = 2; 
const x = 2; 

//scope
var b = 10;
function a() {
    var b = 11;
    c();
    function c() {
        console.log(b);
    }
}

let b = 45;
a();
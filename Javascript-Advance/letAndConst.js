/*
    - let is also hoisted but is in the script(different) location as compared to var which is in global object
    - Initial value is undefined, though we can't use it before the initialization
    - TDZ

*/

console.log(a); // possible but undefined
var a = 10;

// console.log(b) // refrence error 
let b = 10;

if (0) {
    // same var b can't be possible
} else {
    let a = 100;
    console.log(a);
}

console.log(a);
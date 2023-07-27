//hoisting 
console.log(x);
var x = 5;
var b = 1;
b = 4;

console.log(b);
one();
two();

function one() {
    b = 10;
    console.log(b);
}
function two() {
    b = 100;
    console.log(b);
}
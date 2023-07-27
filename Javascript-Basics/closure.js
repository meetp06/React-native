/*
    *function with it's lexical scope bundle is called a closure.
*/

function x1() {
    let a = 100;
    var x = "Smit";
    function y() {
        console.log(a);
    }
    return y;
}

console.log("x = ", x);

let b = 10;

if (b > 10) {
    let x = "Qaisar";
} else if (b === 10) {
    let x = "Meet";
}

console.log(x);

const z = x1();
z();
/*
    * Have it's own exec space and doesn't pollute the global exec

*/


//console.log("x from first ", x);

(() => {
    var x = 10;
    console.log("x from inside ", x);
})();

// console.log("x from last ", x);

(function (name) {
    console.log(`Hello, ${name}!`);
})('John');

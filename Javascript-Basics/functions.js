/*
    Same named functions are allowed with different params and if there are same params then latest Defination is considered.
*/

let x = myFunction(4, 3, 6, 10);
let y = myFunction(1, 2);

function myFunction(a, b) {
    return a * b;
}

function myFunction(a, b, c, d) {
    return a + b + c + d;
}

console.log(x + "  " + y); // 23


/*
    types of functions
    - By function myDF(){}
    - arrow () => {}
    - function expressions function(){}
 
*/

/*  
    functions have default arguments object
    and
*/

x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll(...a) {
    console.log(typeof (arguments)); // both are objects

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(x);


/*
    callback functions

*/

function capitalize(text, callback) {

    if (callback) {
        return callback(text);
    } else {
        return 'hee';
    }
};

const result = capitalize("hell0", (text) => {
    text.charAt(0).toUpperCase();
    return text.toUpperCase();
});

console.log(result);


/*
    immediately invoked function
*/

(function greet() {
    console.log("hello from greet");
})();
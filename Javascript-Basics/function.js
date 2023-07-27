//Function

//1. Normal Function
let info1 = myNewFunction(13, 3);

function myNewFunction(x, y) {
    return x * y;
}

console.log(info1);

//2. Arrow Function
const add = (a, q) => {
    return a + q;
}
let a = 5, q = 6;
console.log("Value is : ", add(a, q));

//3. Direct call function
const hi = () => {
    console.log("How are you");
}
hi();

//call, apply, bind
let name1 = {
    firstName: "Meet,",
    lastName: "Patel,",
}

let printFullName = function (state, country) {
    console.log(this.firstName + " " + this.lastName + state + " " + country);
}

printFullName.call(name1, " gujrat,", "india");

let name2 = {
    firstName: "Qaisar,",
    lastName: "ali,",
}
printFullName.apply(name1, [" pune", "india"]);


let printMyName = printFullName.bind(name2, "pune", "india");
console.log(printMyName);
printMyName();



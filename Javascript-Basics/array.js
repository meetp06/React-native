// basic array structure
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];
console.log(cars[1]);

// add new array
const cars1 = new Array("Saab", "Volvo", "BMW");

// pop operation(remove)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());
console.log(fruits);

// push operation
console.log(fruits.push("Kiwi"));
console.log(fruits);

// shift (remove)
console.log(fruits.shift());
console.log(fruits);

// unshift
console.log(fruits.unshift("lemon"));
console.log(fruits);

// length
console.log(fruits.length);

// concat
const arr1 = ["meet", "qaisar"];
const arr2 = ["a1", "a2", "a3"];
const arr3 = ["b1", "b2"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// splice
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 1);
console.log(fruits1);



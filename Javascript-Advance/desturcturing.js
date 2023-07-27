/*
    *- Use [one, , theree] means comma for ignoring the values.
    *- Use naming convention for destructure from objects and also alias them by using ':'.

*/


const numbers = [1, 2, 3, 4, 5];

// Using array destructuring to unpack values into individual variables
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]



const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

// Using object destructuring to extract values into variables
const { firstName, lastName, age, address: { city } } = person;

console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"
console.log(age); // Output: 30
console.log(city); // Output: "Anytown"

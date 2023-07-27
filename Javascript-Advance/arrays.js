/*
    arrays are declared by 2 methods;
    -> using literal []
    -> using new Array(x, y, z)
    -> always use literal way since it's best and fast
    -> can also use push and [indexNumber] for pushing the elements but indexWay will produce holes if not used correctly
*/

const fruit = [];
const f1 = new Array(10);
const f2 = new Array(10, 11);
console.log(f1, f2);

/*
    Arrays methods are:
    -> length is not a method but property.
    -> Join for concatation of strings
    -> push for insertion at back
    -> pop for removal from back
    -> shift for removal from front -------> same as pop front and aslo returns the value like pop does in JAVA
    -> Unshift for adding from front ------> same as push_front of c++
    -> Delete provide index, it will delete but keep holes at specified index // ? delete[position]
    -> concat for as usual stuff //? a.concat(...)
    -> Reverse // ? a.reverse;

    //* Splic is implace while slice is not
    -> Splice act as insert at given postion and also delete and return them and can also be used as a clever technique for removal of substring without leaving holes. //?(index, toRemove, values in commas)
    -> Slice act as a substring getter same as s.substr in c++ //?(index, uptillIndex + 1)
*/

var fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits);

// Use the splice() method to add or remove elements from the array
// Remove 1 element at index 1 and add 2 new elements 'grape' and 'kiwi'
const removedFruit = fruits.splice(1, 1, 'grape', 'kiwi');
console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'cherry', 'date']
console.log(removedFruit); // Output: ['banana']

// Use the slice() method to create a new array that is a copy of a portion of the original array
// Slice a portion of the original array starting at index 1 and ending at index 3 (not inclusive)
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['grape', 'kiwi']
console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'cherry', 'date']


/*
    //* Sorting 
    use .sort() and reverse() combo's
    compare function uses negative then a will put before and positive k liye alag

*/

const v = Math.max(1, 2, 34, Infinity)
console.log(v);

const sortingFunction = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
};

fruits.sort(sortingFunction);
console.log(fruits);



/*
    -> foreach(value, index, array)
    -> map works as same but returns a new copy
    -> filter works as same but returns a new copy of selected elements
            => if return is 1 then it'll be inserted else not

    -> //? Reduce is accumulate type where you pass a value that is going to be the inital value

    -> Every is used for checking if all the values pass the condition
    -> Some is used for checking if some values pass the condition
    -> find is used to check if particular value pass the condition
    -> findIndex is same as above but is used for finding the index
    -> Indexof find the element index and if not then return -1
    -> from is used to convert into iterable type of array
    -> includes is used for checking as a boolean

*/

/*
    push() - adds an element to the end of an array
    pop() - removes the last element from an array
    shift() - removes the first element from an array
    unshift() - adds an element to the beginning of an array
    splice() - removes or replaces elements in an array
    slice() - extracts a portion of an array and returns a new array
    concat() - merges two or more arrays into a new array
    reverse() - reverses the order of elements in an array
    sort() - sorts the elements of an array
    fill() - fills all the elements of an array with a static value
    map() - creates a new array with the results of calling a function on every element in the array
    filter() - creates a new array with all elements that pass a test implemented by the provided function
    reduce() - applies a function to each element in an array and reduces the array to a single value
    forEach() - calls a function for each element in an array
    find() - returns the value of the first element in an array that satisfies the provided testing function
    findIndex() - returns the index of the first element in an array that satisfies the provided testing function
    indexOf() - returns the first index at which a given element can be found in an array
    lastIndexOf() - returns the last index at which a given element can be found in an array
    includes() - determines whether an array includes a certain value
    every() - tests whether all elements in an array pass the provided function
    some() - tests whether at least one element in an array passes the provided function

*/

// Define an array of numbers
let numbers = [5, 10, 15, 20, 25];

// Use the forEach() method to loop through each element of the array

let sum1 = 0;

numbers.forEach((number, index, arr) => {
    console.log(`Element ${index} is ${number} with ${arr}`);
    number *= 2;
});

console.log("numbers after change", sum1);

// Use the map() method to create a new array by transforming each element of the original array
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [10, 20, 30, 40, 50]

// Use the filter() method to create a new array with only the elements that meet a certain condition
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [10, 20]

// Use the reduce() method to compute a single value from the array by accumulating the results of a function
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // Output: 75

// Use the find() method to retrieve the first element of the array that meets a certain condition
const firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber); // Output: 10

// Use the includes() method to check if the array includes a certain element
const includesTwenty = numbers.includes(20);
console.log(includesTwenty); // Output: true

// Use the some() method to check if any element of the array meets a certain condition
const hasEvenNumbers = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumbers); // Output: true

// Use the every() method to check if every element of the array meets a certain condition
const allNumbersArePositive = numbers.every(number => number > 0);
console.log(allNumbersArePositive); // Output: true

/*
    * Spread is used for degrouping the elements from either an array or an object.
    * Rest is used fop grouping the elements into the array when we don't know the number of args that we will get.
*/


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Spread operator used to concatenate two arrays
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Spread operator used in a function call
const maxNum = Math.max(...arr1, ...arr2);
console.log(maxNum); // Output: 6


function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
// const arr = [4,5,6];
// const arrValue = arr;
// console.log(arrValue);


// let arr1 = [4, 5, 6, 8, 9];
// let obj1 = { ...arr }
// function func(a, b, c, d) {
//     return a + b + c + d
// }
// console.log(func(...arr1)); //ek array ko function me dal sakte hai using spred oprator


// let arr2 = [1,2,3,4,5,6,7]
// let [a2,b2,c2,d2,...rest2] = arr2;
// console.log(a2,c2,d2,rest2);

// let [a1,,c1,d1,...rest1] = arr2;
// console.log(a1,d1,rest1);

// let {a,b} = {a:7,b:8}
// console.log(a,b);

// let fiarr = [1,2,3];
// let searr = [4,5,6];
// console.log(...fiarr,...searr);

// let obj2 = {
//     name:"Meet",
//     company:"simform",
//     position:"trainee"
// }
// console.log({...obj2,name:"ayar"});
// console.log({name:"ayar",...obj2});

const hiren = [20,30, 40, 50, 60]
const [meet,b,...c] = hiren;
console.log(meet);

// const updateData = {}
// console.log(updateData); //{}
// let myBox = ['hello', 1, 2, 3, true, 'hi'];
// console.log({...myBox});

//toString() method
// let colors = ['blue','red','pink']
// console.log(colors.toString());

//join()
// let colors = ['blue','red','pink']
// console.log(colors.join(",,"));

//concat
// let firstNumbers = [1, 2, 3];
// let secondNumbers = [4, 5, 6];
// let thirdNumbers = [7,8,9]
// let merged = firstNumbers.concat(secondNumbers,thirdNumbers,123,456,789);
// console.log(merged);

//push()
// let internet = ["chrome","firefox","onion"]
// internet.push("explorer")
// console.log(internet);

//pop()
// let internet = ["chrome","firefox","onion"]
// internet.pop()
// console.log(internet);

//shift()
// let browsers = ['chrome', 'firefox', 'edge'];
// browsers.shift(); 
// console.log(browsers);

//unshift
// let browsers = ['chrome', 'firefox', 'edge'];
// browsers.unshift('safari');
// console.log(browsers);

//splice(index,deletecount//number of elements to be deleted from that index,add element)
// let colors = ['green', 'yellow', 'blue', 'purple'];
// colors.splice(1,2);
// console.log(colors);

// let colors = ['green', 'yellow', 'blue', 'purple'];
// colors.splice(1,2,"pink");
// console.log(colors);

// let colors = ['green', 'yellow', 'blue', 'purple',"new"];
// colors.splice(3);
// console.log(colors);

// let schedule = ['I', 'have', 'a', 'meeting', 'with'];
// schedule.splice(6, -4, 'some', 'clients', 'tommorrow');
// console.log(schedule);

// slice()
// let numbers = [1, 2, 3, 4]
// console.log(numbers.slice(1,3)) 

// let message = 'congratulations'
// const abbrv = message.slice(0, 7) + 's!'; 
// console.log(abbrv)

// let value = [1,2,3,4,5,6];
// console.log(value.splice(2,4,"hello"));
// console.log(value);

// let value1 = [1,2,3,4,5,6];
// console.log(value1.slice(2,4));
// console.log(value1);

//split()
// let name = "Hello, all"
// console.log(name.split(',',2));

//indexOf
// let fruits = ["apple", "banana", "orange", null, "orange", 456]
// console.log(fruits.indexOf("orange"));

// lastIndexOf()
// let fruits = [456, "apple", 456, "banana", "orange", null, 456]
// console.log(fruits.lastIndexOf(456));

//filter
// const countryCode = ['123', '466', '789', 123]
// const indiaCode = countryCode.filter(code => code === '123')
// console.log(indiaCode);

// map
// let number = [45, 2, 3, 4, 5, 6];
// let a= 0;
// let mapNumb = number.map((v, i = 0) => { return `${i + 1} : ` + v })
// console.log(mapNumb);

//reduce
// let number = [12,54,78,8956,124,78];
// let addNum = number.reduce()

//without using reduce
// let number = [1,2,3];
// let sum =0;
// for(let b of number){
//     sum += b;
// }
// console.log(sum);

//with use of reduce
// const number = [1, 2, 3];
// const addNum = number.reduce((p, c) => {
//     console.log(p);
//     return p + c
// },1)
// console.log(addNum);

//for each
// let name1 = ["hello", "all", "how", "are", "you"]
// let initIndex = name1.forEach((v, i) => console.log(i,v))

// every &
// let numbers = [54, -63, 89, 0];
// let checkNum = numbers.every((numbs) => {
//     return numbs <= 0
// })
// console.log(checkNum);

//some |
// let numbers = [54, -63, 89, 0];
// let checkNum = numbers.some((numbs) => {
//     return numbs <= 0
// })
// console.log(checkNum);

//includes
// let name1 = ["hello", "all", "how", "are", "you"]
// console.log(name1.includes("hello"));

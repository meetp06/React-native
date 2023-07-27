// *let user = new Object();

//*object constructor
// function info1(fname, lname, mname) {
//     this.fname = fname;
//     this.lname = lname;
//     this.mname = mname;
// }

//1.
// let data = new info1("Meet", "patel", "xyz")
// console.log(data);

//2.
// info1 = {
//     fname: "meet",
//     lname: "patel",
//     mname: "xyz"
// }
// console.log(info1);

// *access value from function using key or property
// const info1 = {
//     fname: "meet",
//     lname: "patel",
//     marks: {
//         eng: 96,
//         maths: 89, 
//     }
// }
// console.log(Object.keys(info1));
// console.log(Object.values(info1));
// console.log(info1["marks"]["eng"]);
// console.log(info1.marks.eng);

//*Object To Array Entries
// const info1 = {
//     fname: "meet",
//     lname: "patel",
//     mname: 56
// }
// console.log(Object.entries(info1));

//*Merging Object with Spread:
// const info1 = {
//     fname: "meet",
//     lname: "patel",
//     mname: 56
// }
// //method 1 
// const info = {
//     ...info1,
//     age: 23,
// }
// //method 2 
// const info3 = {
//     fname: "meet",
//     lname: "patel",
//     mname: 56,
//     age: 22,
// }
// console.log(info2);

//*Combining Two Object
// const info1 = {
//         fname: "meet",
//         lname: "patel",
//         mname: 56,
//         age :45,
//     }
// const info  = {
//     age :  12,
// }    
// console.log(Object.assign(info,info1));

//*Freezing An Object
// const info1 = {
//         fname: "meet",
//         lname: "patel",
//         mname: 56,
//         age :45,
//     }
// Object.freeze(info1)
// info1.fname = "sahewaz";
// console.log(info1.fname);

//*isfrozen
// const info1 = {
//     fname: "meet",
//     lname: "patel",
//     mname: 56,
//     age :45,
// }
// console.log(Object.isFrozen(info1));
// console.log(Object.freeze(info1));
// console.log(Object.isFrozen(info1));

//*seal
// const user1 = {
//   mobile: 897465,
//   name: "meet"
// }
// Object.seal(user1);
// user1.name = 'meet123';
// console.log(user1.name) 
// user1.age = 26;
// console.log(user1.age) //undefined

//*is seal
// const user1 = {
//     mobile: 897465,
//     name: "meet"
// }
// console.log(Object.isSealed(user1));
// console.log(Object.seal(user1));
// console.log(Object.isSealed(user1));

//*localization
// const date1 = new Date(Date.UTC(2018, 11, 20, 3, 0, 0));
// console.log(date1.toLocaleString('bn'))

const myKey = "Hiren";
const obj = {};

Object.assign(obj, { [`${myKey}`]: "Green" });
console.log(obj);
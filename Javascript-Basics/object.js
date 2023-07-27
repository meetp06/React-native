// Boolean, string, number are object when add new keyword otherwise all things are object in javascript
let obj1 = {
    name: "Meet",
    Age: 22,
    lan: "guj",
}
console.log(obj1.lan);

// empty object
const intro = {};
intro.Age = 22;
intro.lan = "guj";
intro.name = "Meet";
console.log(intro);

// create new object
const create = new Object();
create.Age = 22;
create.lan = "guj";
create.name = "Meet";
console.log(create);

// add new and update property in object
const create = new Object();
create.Age = 22;
create.lan = "guj";
create.name = "Meet";

const x = create;
x.Age = 23;
console.log(create.Age);

// syntax for accessing the property of an object
const obj2 = {
    name: "Meet",
    Age: 22,
    lan: "guj",
}

console.log(obj2.name);
console.log(obj2["Age"]);

// for..in in object

const obj3 = {
    name: "Meet",
    Age: 22,
    lan: "guj",
}

for (let a in obj3){
    console.log(obj3[a]);   
}

// nested object
const myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj.cars.car2);



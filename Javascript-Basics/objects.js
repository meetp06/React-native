/*
//* - javascript objects are always pass by the refrence, hence take care when dealing with assigning them to another 
//* - when using subscript use alwauys "" for accesssing
    - 
*/

const object = {
    hell: "name",
    "hello": "d",
};

console.log(object["hell"]);

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
    }
}




/*
    In an object method, this refers to the object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), apply(), and bind() can refer this to any object.
    this is not a variable. It is a keyword. You cannot change the value of this.

*/


const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",

    get lang() {
        return this.language;
    },

    set lang(lang) {
        this.language = lang;
    }

};
person.lang = "english";
console.log(person.lang);

const f = [1, 1, 1];


/*
    anyArray.__proto__ = array.__proto__
    ""                .__proto__ = object.__proto__

    array -> object -> NULL;
    function -> object -> NULL;
    Prototype can be used for inheritance which is damn amazing
*/

console.log(f.__proto__.__proto__ === person.__proto__);


/*
    set 
    - note that objects are passed and added by refrence
*/

const fruits = ['apple', 'banana', 'cherry', 'date', 'date'];
const mySet = new Set();
mySet.add(fruits);
mySet.add([1, 2, 3]);

const rep = [2, 2, 3];
mySet.add(rep);

console.log(mySet);

const dep = rep;
dep[0] = "f";
mySet.add(dep);
fruits[0] = "changed";

console.log(mySet);


/*
    map
    - note that objects are passed and added by refrence
*/

const fruit = ['apple', 'banana', 'cherry', 'date'];
const v1 = {};
const v2 = {};
const myMap = new Map();

myMap.set("fruit", fruit);
myMap.set(v1, 'a');
myMap.set(v2, 'b');
fruit[0] = "tomato";

console.log(myMap);
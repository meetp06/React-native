/*
    *Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

    * __proto__ => prototype[[prototype]]
*/


{
    const o = {
        a: 1,
        b: 2,
        // __proto__ sets the [[Prototype]]. It's specified here
        // as another object literal.
        __proto__: {
            b: 3,
            c: 4,
        },
    };

    // o.[[Prototype]] has properties b and c.
    // o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
    // what that means later).
    // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
    // This is the end of the prototype chain, as null,
    // by definition, has no [[Prototype]].
    // Thus, the full prototype chain looks like:
    // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

    console.log(o.a); // 1
    // Is there an 'a' own property on o? Yes, and its value is 1.

    console.log(o.b); // 2
    // Is there a 'b' own property on o? Yes, and its value is 2.
    // The prototype also has a 'b' property, but it's not visited.
    // This is called Property Shadowing

    console.log(o.c); // 4
    // Is there a 'c' own property on o? No, check its prototype.
    // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

    console.log(o.d); // undefined
    // Is there a 'd' own property on o? No, check its prototype.
    // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
    // o.[[Prototype]].[[Prototype]] is Object.prototype and
    // there is no 'd' property by default, check its prototype.
    // o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
    // no property found, return undefined.

}

{
    const o = {
        a: 1,
        b: 2,
        // __proto__ sets the [[Prototype]]. It's specified here
        // as another object literal.
        __proto__: {
            b: 3,
            c: 4,
            __proto__: {
                d: 5,
            },
        },
    };

    // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

    console.log(o.d); // 5

}


{

    // * using constructor function then setting inheriting properties

    // A constructor function
    function Box(value) {
        this.value = value;
    }

    // Properties all boxes created from the Box() constructor
    // will have
    Box.prototype.getValue = function () {
        return this.value;
    };

    const boxes = [new Box(1), new Box(2), new Box(3)];
    console.log(boxes);
}

{
    /*  
        * The order of chaining is as follow:
    */

    const o = { a: 1 };
    // The newly created object o has Object.prototype as its [[Prototype]]
    // Object.prototype has null as its prototype.
    // *o ---> Object.prototype ---> null

    const b = ["yo", "whadup", "?"];
    // Arrays inherit from Array.prototype
    // (which has methods indexOf, forEach, etc.)
    // The prototype chain looks like:
    // *b ---> Array.prototype ---> Object.prototype ---> null

    function f() {
        return 2;
    }
    // Functions inherit from Function.prototype
    // (which has methods call, bind, etc.)
    // *f ---> Function.prototype ---> Object.prototype ---> null

    const p = { b: 2, __proto__: o };
    // It is possible to point the newly created object's [[Prototype]] to
    // another object via the __proto__ literal property. (Not to be confused
    // with Object.prototype.__proto__ accessors)
    //* p ---> o ---> Object.prototype ---> null


}


{

    /*
        * Three ways of mutating and creating proto chainss
        * => using __proto__ in body
        * => using constructor function
        * => using object.create
        * => Classes
        * => SetPrototype of
        * => using __proto__ as direct access which is depricated


    */
}


{
    //* using a class 
    // parent class
    class Person {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello ${this.name}`);
        }
    }

    // inheriting parent class
    class Student extends Person {

        constructor(name) {

            console.log("Creating student class");

            // call the super class constructor and pass in the name parameter
            super(name);
        }

    }

    let student1 = new Student('Jack');
    student1.greet();
}
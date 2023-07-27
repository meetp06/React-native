let obj = {
    name: "Meet",
    age: 22,
    lan: "guj",
    intro: function () {
        console.log("The age of " + this.name + "is" + this.age);
    }
}

let obj2 = {
    hobby: "Watch a season",
}

obj2.__proto__ = obj;
console.log(obj2.name);

//arr.__proto__ is array prototype
//Array.prototype is object prototype
//arr.__proto__.__proto__ is also object prototype
//object.prototype is prototype
//but arr.__proto__.__proto__.__proto__ is null




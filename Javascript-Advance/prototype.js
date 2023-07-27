/*
    *Prototypes are the mechanism by which JavaScript objects inherit features from one another.
*/

/*
    anyArray.__proto__ = array.__proto__
    ""                .__proto__ = object.__proto__

    array -> object -> NULL;
    function -> object -> NULL;
    Prototype can be used for inheritance which is damn amazing
*/

{
    const store = {
        increment: function () {
            this.score++;
        },
    }

    function getUser(name, score) {
        const user = Object.create(store);
        user.name = name;
        user.score = score;
        return user;
    }

    const smit = getUser("Smit", 100);
    smit.increment();
    console.log(smit);
}

Object.prototype.getMSG = function () {
    console.log(this.city);
}

function falsy() {
    console.log("this is me");
}

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid
myObject.getMSG(); // only because of inheritance from object prototype

console.log(myObject.__proto__ === Object.prototype); // true as inherits
console.log(falsy.__proto__);

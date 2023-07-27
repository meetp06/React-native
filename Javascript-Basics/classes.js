class Person {
    #name;
    #age;
    #gender;

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printBio() {
        console.log(this.name + " is " + this.age + " years old");
    }


    /*
        * returns a object by default when invoked with new keyword and also this object will have it's proto set to the function's prototype
    */
}


const smit = new Person("Smit", 22, "Male");
console.log(smit.age);
smit.printBio();
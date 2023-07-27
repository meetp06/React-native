class UserDataEntry {
    constructor(fname, lname, place) {
        this.fname = fname;
        this.lname = lname;
        this.place = place;
    }
    personInfo() {
        return `My Name is ${this.fname} ${this.lname}. and I am from ${this.place}`
    }

}

let firstperson = new UserDataEntry("Meet", "Patel", "Ahmedabad")
console.log(firstperson.personInfo());

let secondperson = new UserDataEntry("Qaisar", "ali", "Ahmedabad")
console.log(secondperson.personInfo());


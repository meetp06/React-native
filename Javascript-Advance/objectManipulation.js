/*
    * Keys => Get an array of keys
    * Values => Get an array of values
    * Entries => Get an array of array of [key, pair]
    * assign => Assign new property to the object
    * Freeze => Stop modification of new property and changing current values of properties [REAL CONST AS OF C++]
    * isFrozen => boolean if the object is freezed
    * seal => Seal the object from addintion of new property but allow modifying the current properties
    * isSealed => boolean if object is sealed or not
*/

{
    const obj = {
        name: "John",
        age: 12,
        gender: "male",
    }

    const key = Object.keys(obj);
    console.log(key); // ? [name, age, gender]
}

{
    const obj = {
        name: "John",
        age: 12,
        gender: "male",
    }

    const v = Object.values(obj);
    console.log(v); // ? [ 'John', 12, 'male' ]
}

{
    const obj = {
        name: "John",
        age: 12,
        gender: "male",
    }

    const entry = Object.entries(obj);
    console.log(entry); // ? [ [ 'name', 'John' ], [ 'age', 12 ], [ 'gender', 'male' ] ]
}

{
    const obj = {
        name: "John",
        age: 12,
        gender: "male",
    }

    Object.assign(obj, { name: "SonGoku" });
    console.log(obj);
}

{
    const obj = {
        name: "John",
        age: 12,
        gender: "male",
    }

    Object.freeze(obj);
    //Object.assign(obj, { name: "SonGoku" }); // ?Error runtime
    Object.isFrozen(obj); // ? True
    console.log(obj);
}

{
    const obj = {
        name: "John",
        age: 12,
        gender: "male",
    }

    Object.seal(obj);
    //Object.assign(obj, { nam: "SonGoku" }); // ?Error runtime
    //bject.assign(obj, { name: "SonGoku" }); // ?passes
    Object.isSealed(obj); // ? True
    console.log(obj);
}
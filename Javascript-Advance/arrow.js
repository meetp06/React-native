/*
    - for simplicity
    - No this
    - No constructor 
    - No prototype
    - No arguments object like that of normal function but the same can be made by use of rest
    - Not hoisted as of default named functions
    - better scope
    ? refer this: 'https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/#:~:text=The%20arrow%20function%20doesn't,arrow%20function%20resolves%20this%20lexically.&text=%7D%3B,-myObject.'
*/




{
    const obj = {
        tt: this,
        i: 10,
        b: () => console.log(this.i, this),
        c() {
            console.log(this.i, this);
        },
    };


    obj.b(); // logs undefined, Window { /* … */ } (or the global object)
    obj.c(); // logs 10, Object { /* … */ }

}

{
    //* because this is not present it takes global

    const obj = {
        num: 100,
    };

    // Setting "num" on globalThis to show how it gets picked up.
    this.num = 42;

    // Arrow function
    const add = (a, b, c) => this.num + a + b + c;

    console.log(add.call(obj, 1, 2, 3)); // 48
    console.log(add.apply(obj, [1, 2, 3])); // 48
    const boundAdd = add.bind(obj);
    console.log(boundAdd(1, 2, 3)); // 48
}



{
    //* Good example for this

    const myObject = {
        myMethod(items) {
            console.log(this); // logs myObject

            const callback = () => {
                console.log(this); // logs myObject
            };

            items.forEach(callback);
        }
    };

    myObject.myMethod([1, 2, 3]);
}


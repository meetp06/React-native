// ?'https://javascript.info/import-export' refer

/*
    * You can export as export before the initialization and also at end or first using map export { }
    * for import you have to specify as 'Object' when using *
    * We can use as for alias at both the import and export time
    * We can use export default so that we don't have to destructure it but note that only 1 default per file
*/


// export an array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function sayBye(params) {
    console.log(params);
}

export { months as M };
// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
    constructor(name) {
        this.name = name;
    }
}


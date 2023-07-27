/*
    falsey values are:

    - false
    - 0
    - (-0)
    - null
    - undefined
    - NaN
    - 0 * n
    - document.all

    //* empty objects are truthly 

*/

const name = "" ?? "Q";
console.log(name); // ""

const nameOr = "" || "Q";
console.log(nameOr); //"Q"

// 5 / 0 is infinity
if (5 / 0) {
    console.log("here");
}

if ([]) {
    console.log("isValid");
}

// it is number type
console.log(typeof (NaN));

/*
    || is used for falsely values
    ?? will only check for 'Null' and 'Undefined

*/

/*
    || mai first good value pe stop varna last to lega hi
    && mai last good pe stop varna first to lega hi

*/
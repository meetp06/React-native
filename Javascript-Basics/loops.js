/*
    - for loop
    - while
    - do while
    - for in -> object ki keys pe iterate
    - for each -> array
    - for of -> direct value in array and iterator on Map and set

*/


const a = [1, 2, 3, 4, 5];

const b = {
    name: "Qaisar",
    age: 20,
}

a.forEach((num, ind) => {
    // console.log(num + " " + (ind + 1));
})

for (let ind of a) {
    console.log(ind);
}

for (const key in b) {
    if (Object.hasOwnProperty.call(b, key)) {
        const element = b[key];
        console.log(element);
    }
}
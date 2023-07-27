const obj = [{ name: "qaisar", id: 1 }, { name: "Meet", id: 2 }, { name: "Hiren", id: 3 }];

const index = obj.findIndex((value, ind, obj) => {
    return value.id === 2;
});

obj[index].name = "Smit";

console.log("obj", obj);

const arr = Array([1, 2, 3], 2, 3, 4, 5);
console.log("arr => ", arr);

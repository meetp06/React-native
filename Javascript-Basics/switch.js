let v = 10;

switch (v) {
    case (v = 1):
        break;

    case v % 2 == 0:
        console.log(v, v % 2 == 0);
        console.log("EVEN HAI");
        break;

    case 10:
        console.log("ODD HAI");
        break;

    default:
        console.log("here", v % 2 == 1);
        console.log("DEFAULT");
}

console.log(v);

//? not getting it will do later
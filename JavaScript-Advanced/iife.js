let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let c = 5;
            c > 10 ? resolve("hello") : reject("sorry")
        }, 4000)
    })
}

(resolve)(async () => {
    let b = await a()
    console.log(b);
    let c = await a()
    console.log(c);
})()//*IIFE function called
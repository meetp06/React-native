//*async await are used for getting promise data

async function weather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let a = 20;
            if (a < 25) {
                resolve("weather is okay")
            } else {
                reject("weather is not okay")
            }
        }, )
    })
}

async function good() {
    const warm = await weather().then(completed).catch(notcompleted)
    console.log(warm);
}

const completed = function done(message1) {
    return "it's good"
}

const notcompleted = function notdone(message1) {
    return "it's not good"
}
good()
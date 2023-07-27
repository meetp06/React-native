// const myPromise = new Promise((resolve, reject) => {
//     const a = 4, b = 5; c = a + b;
//     if (c === 7) {
//         resolve(`yes! You are right`)
//     } else {
//         reject(`Sorry! you are wrong`)
//     }
// })

// myPromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// })

//* Promise.all Promise.any Promise.race Promise.allsettled
const promiseone = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(`Promiseone resolved`)
        reject(`Promiseone reject`)
    }, 300)
});
const promisetwo = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(`Promisetwo resolved`)
        reject(`Promisetwo reject`)
    }, 400)
});
const promisethree = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promisethree resolved`)
        // reject(`Promisethree reject`)
    }, 500)
});

const fetchData = async () => {
    try {
        const responsePromise = await Promise.any([promiseone(), promisetwo(), promisethree()])
        console.log(`response from promise side`, responsePromise);

    } catch (error) {
        console.log(`error api is not response`, error);
    }
}
fetchData()
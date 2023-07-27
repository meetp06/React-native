//create promise for fulfilled
const promise = new Promise((resolve, reject) => {
    //changes from pending to fulfilled
    resolve()
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 10000)
    //changes from pending to fulfilled
})
promise.then()

// create promise for rejection
const promise2 = new Promise((resolve, reject) => {
    //changes from pending to rejected
    reject()
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 10000)
    //changes from pending to rejected
})
promise.catch()



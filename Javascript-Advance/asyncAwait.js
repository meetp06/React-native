// /*  
//     * This is used to remove the long promise chains and to provide a cleaner style.

// */

// {
//     function onSuccess(msg) {
//         console.log(msg);
//         return "Returned"
//     }

//     function resolveAfter2Seconds(rev) {
//         return new Promise((resolve, reject) => {
//             console.log("Inside");
//             resolve("Take the message");
//         });
//     }

//     async function asyncCall() {

//         const result = await resolveAfter2Seconds().then(onSuccess);
//         console.log('calling');
//         console.log("result =>", result);
//         // Expected output: "resolved"
//     }

//     console.log("here");
//     asyncCall();
//     console.log("last");
// }

// {
// /*
//    *Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent. 
//    *An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.
//    *It can be a problem when you want to check the equality of a promise and a return value of an async function.
// */

//     const p = new Promise((res, rej) => {
//         res(1);
//     });

//     async function asyncReturn() {
//         return p;
//     }

//     function basicReturn() {
//         return Promise.resolve(p);
//     }

//     console.log(p === basicReturn()); // true
//     console.log(p === asyncReturn()); // false

// }

// {
//     let cnt = 0;

//     function apiCall() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 cnt++;
//                 console.log("Inside Apicall " + cnt);
//                 resolve(cnt);
//             }, 5000)
//         });
//     }

//     async function callF() {
//         const result1 = await apiCall();
//         console.log("result1 ", result1);
//     }

//     async function callF2() {
//         const result2 = await apiCall();
//         console.log("result2 ", result2);
//     }

//     callF();
//     callF2();
//     console.log("End");
// }



{
    /*
        *Execution order

    */

    function resolveAfter2Seconds() {
        console.log("starting slow promise");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("slow");
                console.log("slow promise is done");
            }, 2000);
        });
    }

    function resolveAfter1Second() {
        console.log("starting fast promise");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("fast");
                console.log("fast promise is done");
            }, 1000);
        });
    }

    async function sequentialStart() {
        console.log("==SEQUENTIAL START==");

        // 1. Execution gets here almost instantly
        const slow = await resolveAfter2Seconds();
        console.log(slow); // 2. this runs 2 seconds after 1.

        const fast = await resolveAfter1Second();
        console.log(fast); // 3. this runs 3 seconds after 1.
    }

    async function concurrentStart() {
        console.log("==CONCURRENT START with await==");
        const slow = resolveAfter2Seconds(); // starts timer immediately
        const fast = resolveAfter1Second(); // starts timer immediately

        // 1. Execution gets here almost instantly
        console.log(await slow); // 2. this runs 2 seconds after 1.
        console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
    }

    function concurrentPromise() {
        console.log("==CONCURRENT START with Promise.all==");
        return Promise.all([resolveAfter1Second(), resolveAfter2Seconds()]).then(
            (messages) => {
                console.log(messages[0]); // slow
                console.log(messages[1]); // fast
            },
        );
    }

    async function parallel() {
        console.log("==PARALLEL with await Promise.all==");

        // Start 2 "jobs" in parallel and wait for both of them to complete
        await Promise.all([
            (async () => console.log(await resolveAfter2Seconds()))(),
            (async () => console.log(await resolveAfter1Second()))(),
        ]);
    }

    sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

    // wait above to finish
    setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

    // wait again
    setTimeout(concurrentPromise, 7000); // same as concurrentStart

    // wait again
    setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

}

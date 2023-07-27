{
    /*
            going by naive method of passing recursively
    */
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("from timeout");
            const value = 2;
            value === 2 ? resolve("Yes, passed from resolved") : reject("No, passed from reject");
        }, 5000);

    });

    const onSuccess = (msg) => {
        console.log(msg);
    };

    const onFailure = (msg) => {
        console.log(msg);
    }

    promise.then(onSuccess).catch(onFailure);

    console.log("All done1");
}



{
    /*  
        going by chaining
    */

    const toPassFunc = (resolve, reject) => {

        setTimeout(() => {
            console.log("from timeout2");
            const value = 2;
            value === 2 ? resolve("Yes, passed from resolved2") : reject("No, passed from reject2");
        }, 5000);

    };

    const onSuccess = (msg) => {
        console.log(msg);
        //return msg + " second also.";
    };

    const onFailure = (msg) => {
        console.log(msg);
    }

    const promise = new Promise(toPassFunc);

    promise.then(onSuccess).catch(onFailure);

    console.log("All done2");

}


/*
    * - all => parellel but fails if any fails dependent
    * -allSettled => parellel but not dependent
    * -any => first fullfilled
    * -race => It's useful when you want the first async task to complete, but do not care about its eventual state

*/

// {
//     const promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             setTimeout(resolve, 3000, 'foo',);
//         }, 5000)
//     });
//     const promise2 = 42;
//     const promise3 = new Promise((resolve, reject) => {
//         setTimeout(resolve, 5000, 'foo',);
//     });

//     Promise.all([promise3, promise2, promise1]).then((values) => {
//         console.log(values);
//     }).catch((err) => {
//         console.log(err);
//     });
// }
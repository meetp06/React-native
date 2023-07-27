let counter = createCounter();
let counter1 = createCounter();

function createCounter() {
    return {
        count: 0,
        increment: function () {
            this.count++;
        }
    }
}

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1);




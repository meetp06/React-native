let message;

if (true) {
    // "if" block scope
    const message = 'Hello';
    console.log(message, "inside"); // 'Hello'
}

console.log(message);

function run() {
    // "run" function scope
    var message = 'Run, Forrest, Run!';
    console.log(message, "inside"); // 'Run, Forrest, Run!'
}

run();

function a() {
    var message = 10;
    console.log(message);
}

a()
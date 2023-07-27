var a = 33;
var b = 10;
var c = "Test";
var linebreak = () => {
    console.log();
}

document.write("a + b = ");
result = a + b;
document.write(result);
linebreak();

document.write("a - b = ");
result = a - b;
document.write(result);
linebreak();

document.write("a / b = ");
result = a / b;
document.write(result);
linebreak();

document.write("a % b = ");
result = a % b;
document.write(result);
linebreak();

document.write("a + b + c = ");
result = a + b + c;
document.write(result);
linebreak();

a = ++a;
document.write("++a = ");
result = ++a;
document.write(result);
linebreak();

b = --b;
document.write("--b = ");
result = --b;
document.write(result);
linebreak();
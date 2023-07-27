// const customLogType = (variable: unknown): void => {
//   console.log('====================================');
//   console.log(variable, '=>', typeof variable);
//   console.log('====================================');
// };
var _a;
// let message: string = 'Hello!!';
// message = 123 as any;
// let sales: number = 123;
// // sales= "123"
// let bool = true; // implicit type inference to boolean
// customLogType(bool);
// let me; // typescript assumes type as any
// let myvariable: any;
// customLogType(myvariable);
// myvariable = 'Qaisar';
// customLogType(myvariable);
// myvariable = 1 as any;
// customLogType(myvariable);
// // in unknown we cannot access property of variable declared as type unknown like property of string before specifying type
// const myFunc = (oneVar: unknown) => {
//   if (typeof oneVar === 'string') console.log(oneVar.length);
//   if (typeof oneVar === 'number') oneVar * 2;
// };
// // in any it will allow accessing the property of variable
// const myFunc2 = (oneVar: any): void => {
//   console.log(oneVar.length);
// };
// // let x: never = 'Bad'
// //* type assertion
// let v: any = 'ShortCut';
// console.log('====================================');
// console.log((v as string).length);
// console.log('====================================');
// let names: string[] = [];
// // names.push(1); // gives error because it is string array
// names.push('Qaisar'); // no error
// let numbers = [1, 2, '3', true, [1, 2, '3']];
// let readArr: readonly string[] = [
//   'qaisar',
//   'khyati',
//   'nishi',
//   'jigar',
//   'meet',
//   'harsh',
//   'vijay',
//   'ami',
//   'niyanta',
//   'darshan',
//   'ronak',
// ];
// // readArr.push('newone') // error because it is read only
// // readArr[5] = '' // error
// let myTuple: [number, string];
// myTuple = [1, 'JSR'];
// type VoidF = (v: string) => void;
// function calculationFunction(x: number, b: number): VoidF {
//   // let c = 1; // declared but never used
//   //   if (x < 10) return x;
//   //   else return x + '';
//   // return x * b;
//   return customLogType;
// }
// for (let i: number = 0; i < 5; i++) {
//   console.log('====================================');
//   console.log(typeof i);
//   console.log('====================================');
// }
// // let myName: string = 'Qaisar';
// // myName = 1;
//////// Day 1 TS Advance
var numberVar = 18;
var stringVar = 'Hello';
var booleanVar = true;
var arrayVar = ['a', 'b', 'c', 'd'];
var numberArray = [1, 2, 3, 4, 5];
var tupleVar = [18, 'Cool', true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//   console.log(Color);
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
    HTTPMethod["PUT"] = "PUT";
    HTTPMethod["DELETE"] = "DELETE";
})(HTTPMethod || (HTTPMethod = {}));
var unionVar = 10;
unionVar = {
    id: 10,
    name: 'Div',
};
//   unionVar.id;
//   unionVar = 'String';
var objectVar = { id: 10 };
var unionObj = null;
unionObj = {
    id: 18,
    name: 'Cool',
};
var nameVar = unionObj.name;
var _b = useState(null), user = _b[0], setUser = _b[1];
var stateName = user === null || user === void 0 ? void 0 : user.id;
var person = {
    id: 1,
    name: 'John Doe',
    message: function () {
        console.log('first');
    },
};
var cityName = (_a = person.address) === null || _a === void 0 ? void 0 : _a.city;
var myFunc = function () {
    console.log('function');
};
function getFruitColor(fruit) {
    switch (fruit) {
        case 'apple':
            return 'red';
        case 'banana':
            return 'yellow';
        case 'orange':
            return 'orange';
        default:
            var exhaustiveCheck = fruit;
            throw new Error("Unhandled fruit: ".concat(exhaustiveCheck));
    }
}
//   getFruitColor('hello');
var myObj = {
    id: 18,
    name: 'Div',
};
var userObj = {
    firstname: 'Div',
    lastname: 'Rajput',
    age: 20,
    phone: 9686655555,
};
console.log('====================================');
console.log(userObj);
console.log('====================================');
var add = function (x, y) { return x + y; };
add(5, 6);
var userColor = null;
var myAnimal = {
    // name: 'Tiger',
    color: 'Orange',
    behaviour: 'Good',
};
var employee = {
    name: 'ABC',
    age: 20,
    company: 'Simform',
    salary: 20000,
    greet: function () { return console.log('Employee'); },
    role: 'Developer',
};
var mapObj = {
    age: 10,
    city: 'city',
    name: '10',
};
var x = 'hello';
x.length;
var partialObj = {
    id: 10,
};
var requiredObj = {
    id: 18,
    name: 'Div',
    age: 20,
};
requiredObj.id = 20;
var readObj = {
    id: 18,
    name: 'Div',
};
var recordObj = {
    1: { age: 10, name: 'aaa' },
    2: { age: 15, name: 'bbb' },
    3: { age: 20, name: 'ccc' },
};
var todoPick = {
    title: 'abc',
    completed: false,
    // description: 'hello',
};
var todoOmit = {
    // title: 'abc',
    // completed: false,
    description: 'hello',
};

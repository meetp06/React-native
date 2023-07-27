"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const NewHome = () => {
    var _a;
    const numberVar = 18;
    const stringVar = 'Hello';
    const booleanVar = true;
    const arrayVar = ['a', 'b', 'c', 'd'];
    const numberArray = [1, 2, 3, 4, 5];
    const tupleVar = [18, 'Cool', true];
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    //   console.log(Color);
    let HTTPMethod;
    (function (HTTPMethod) {
        HTTPMethod["GET"] = "GET";
        HTTPMethod["POST"] = "POST";
        HTTPMethod["PUT"] = "PUT";
        HTTPMethod["DELETE"] = "DELETE";
    })(HTTPMethod || (HTTPMethod = {}));
    let unionVar = 10;
    unionVar = {
        id: 10,
        name: 'Div',
    };
    //   unionVar.id;
    //   unionVar = 'String';
    let objectVar = { id: 10 };
    let unionObj = null;
    unionObj = {
        id: 18,
        name: 'Cool',
    };
    const nameVar = unionObj.name;
    const [user, setUser] = (0, react_1.useState)(null);
    const stateName = user === null || user === void 0 ? void 0 : user.id;
    const person = {
        id: 1,
        name: 'John Doe',
        message: () => {
            console.log('first');
        },
    };
    const cityName = (_a = person.address) === null || _a === void 0 ? void 0 : _a.city;
    const myFunc = () => {
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
                const exhaustiveCheck = fruit;
                throw new Error(`Unhandled fruit: ${exhaustiveCheck}`);
        }
    }
    //   getFruitColor('hello');
    let myObj = {
        id: 18,
        name: 'Div',
    };
    const userObj = {
        firstname: 'Div',
        lastname: 'Rajput',
        age: 20,
        phone: 9686655555,
    };
    console.log('====================================');
    console.log(userObj);
    console.log('====================================');
    const add = (x, y) => x + y;
    add(5, 6);
    const userColor = null;
    const myAnimal = {
        // name: 'Tiger',
        color: 'Orange',
        behaviour: 'Good',
    };
    const employee = {
        name: 'ABC',
        age: 20,
        company: 'Simform',
        salary: 20000,
        greet: () => console.log('Employee'),
        role: 'Developer',
    };
    const mapObj = {
        age: 10,
        city: 'city',
        name: '10',
    };
    const x = 'hello';
    x.length;
    const partialObj = {
        id: 10,
    };
    const requiredObj = {
        id: 18,
        name: 'Div',
        age: 20,
    };
    requiredObj.id = 20;
    const readObj = {
        id: 18,
        name: 'Div',
    };
    const recordObj = {
        1: { age: 10, name: 'aaa' },
        2: { age: 15, name: 'bbb' },
        3: { age: 20, name: 'ccc' },
    };
    const todoPick = {
        title: 'abc',
        completed: false,
        // description: 'hello',
    };
    const todoOmit = {
        // title: 'abc',
        // completed: false,
        description: 'hello',
    };
    return (<react_native_1.View>
      <react_native_1.Text>NewHome</react_native_1.Text>
    </react_native_1.View>);
};
exports.default = NewHome;

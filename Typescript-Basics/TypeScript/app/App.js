"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const NewHome_1 = __importDefault(require("./NewHome"));
const App = () => {
    const [counter, setCounter] = (0, react_1.useState)(0);
    const [name, setName] = (0, react_1.useState)('Initial');
    //* Main component
    return (<react_native_1.SafeAreaView>
      {/* <Home
          name={name}
          setName={setName}
          counter={counter}
          setCounter={setCounter}
        /> */}
      <NewHome_1.default />
    </react_native_1.SafeAreaView>);
};
exports.default = App;

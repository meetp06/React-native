"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Home = ({ counter, setCounter, name, setName, }) => {
    const performAction = () => {
        setCounter((pre) => pre + 1);
        setName('V');
    };
    return (<react_native_1.View>
      <react_native_1.Text>
        {counter} {name}
      </react_native_1.Text>
      <react_native_1.Button title='Click to Inc' onPress={performAction}/>
    </react_native_1.View>);
};
exports.default = Home;

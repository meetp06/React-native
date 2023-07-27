import React, { useRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Counter = React.forwardRef((props, ref) => {

    console.log('====================================');
    console.log("Inside Counter with ref", ref);
    console.log('====================================');

    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const incrementRef = useRef(increment);
    const decrementRef = useRef(decrement);


    useImperativeHandle(ref, () => {
        return {
            increment: incrementRef.current,
            decrement: decrementRef.current,
        }
    })

    const d = useRef(0);

    return (
        <View>
            <TouchableOpacity onPress={increment}>
                <Text>Increment</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={decrement}>
                <Text>Decrement</Text>
            </TouchableOpacity>
        </View>
    );
});

export default Counter;

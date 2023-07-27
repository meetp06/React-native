import { useCallback, useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { customContext } from "../App";
import { CustomButton } from "./button";
import { useCustomHook } from "./customHool";


const Body = ({ myName }: any) => {

    const value = useContext(customContext);
    const { count, incrementCount, reset } = useCustomHook();

    console.log('====================================');
    console.log("Rerendered Body");
    console.log('====================================');

    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(99);

    useEffect(() => {
        console.log("Inside Use effect", myName);
    }, [myName]);

    const pointerIncrease = useCallback(() => {

        const val = Math.floor(Math.random() * 3);
        setStart(val);
        return;

    }, []);

    return (
        <View>
            <Text>{value}</Text>
            <CustomButton children={myName} onPress={pointerIncrease} />
            <View>
                <Text>The count is: {count}</Text>
                <CustomButton children="Increment" onPress={incrementCount} />
                <CustomButton children="Reset" onPress={reset} />
            </View>
        </View>
    );
}

export default Body;
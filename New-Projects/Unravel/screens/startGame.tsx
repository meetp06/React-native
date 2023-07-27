import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/ui/card";
import Instruction from "../components/ui/instructions";
import CustomButton from "../components/ui/primaryButton";
import CustomTitle from "../components/ui/title";
import colors from "../constants/colors";

export default function StartGame({ onDone }: any) {

    const [inputNumber, setInputNumber] = useState('');

    const inputHandler = (value: any) => {
        setInputNumber(value);
    }

    const resetHandler = (value: any) => {
        setInputNumber('');
    }

    const onConfirmHandler = (value: any) => {
        const curNum = parseInt(inputNumber);
        const curNum2 = parseInt(`${inputNumber.charAt(1)}${inputNumber.charAt(0)}`)

        if (isNaN(curNum) || curNum < 0 || curNum > 99 || isNaN(curNum2) || curNum2 < 0 || curNum2 > 99) {
            Alert.alert(
                'Invalid input',
                'Please enter a valid number in range 1-99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]
            );

            return;
        }

        onDone(curNum);
    }

    return (
        <View>
            <View style={styles.rootView}>
                <CustomTitle childern={"Guess my number"} />
            </View>

            <Card
                children={
                    <View>
                        <Instruction children={"Enter a number"} />
                        <TextInput
                            autoFocus={true}
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType='number-pad'
                            onChange={inputHandler}
                            onChangeText={inputHandler}
                            value={inputNumber}
                        />

                        <View style={styles.rowButton}>
                            <View style={{ flex: 1 }}>
                                <CustomButton onPress={resetHandler}>Reset</CustomButton>
                            </View>
                            <View style={{ flex: 1 }}>
                                <CustomButton onPress={onConfirmHandler} >Confirm</CustomButton>
                            </View>
                        </View>
                    </View>
                }
            />

        </View>
    );
}

const styles = StyleSheet.create({

    rootView: {
        marginTop: 30,
        alignItems: 'center',
    },

    mainBody: {
        marginHorizontal: 12,
        marginTop: 50,
        padding: 12,
        backgroundColor: colors.primaryPurple,
        borderRadius: 12,
        elevation: 8,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 16,
        alignItems: 'stretch',
    },

    numberInput: {
        alignSelf: 'center',
        height: 50,
        borderBottomWidth: 2,
        borderColor: colors.primaryYellow,
        color: colors.primaryYellow,
        fontSize: 23,
        fontWeight: "bold",
        textAlign: 'center',
        width: 34,
    },

    rowButton: {
        marginTop: 5,
        flexDirection: 'row',
    },
});
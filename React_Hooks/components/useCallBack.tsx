import React, { useCallback, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

function UseMemoFunction() {

    const [buttonOne, setbuttonOne] = useState(0);
    const [buttonTwo, setbuttonTwo] = useState(0);

    const checkOddOrEven = useCallback(() => {
        console.log("....")
        let i = 0;
        return buttonOne % 2 === 0;
    }, [buttonOne])

    function resetValue() {
        setbuttonOne(0);
        setbuttonTwo(0);
    }

    return (
        <SafeAreaView style={styles.mainPage}>

            <View style={styles.firstComponenet}>
                <Button title="btn1" onPress={() => setbuttonOne(buttonOne + 1)} />
                <Text style={{ fontSize: 30, marginRight: 20, marginLeft: 10 }}>{buttonOne}</Text>
                <Button title="btn2" onPress={() => setbuttonTwo(buttonTwo + 1)} />
                <Text style={{ fontSize: 30, marginRight: 20, marginLeft: 10 }}>{buttonTwo}</Text>
                <Text>{checkOddOrEven() ? "Even" : "Odd"}</Text>
            </View>

            <View style={styles.secondComponenet}>
                <Button title="RESET VALUE" onPress={resetValue} />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstComponenet: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondComponenet: {
        marginTop: 20,
    }
})

export default UseMemoFunction;
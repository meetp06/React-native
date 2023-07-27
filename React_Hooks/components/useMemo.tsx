import React, { useMemo, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

function UseMemoFunction() {

    const [buttonOne, setbuttonOne] = useState(0);
    const [buttonTwo, setbuttonTwo] = useState(0);

    const checkOddOrEven = useMemo(() => {
        console.log("Function one is used")
        let i = 0;
        // while (i < 30000000) i++;
        return buttonOne % 2 === 0;
    }, [buttonOne])

 
    // function checkOddOrEven() {
    // return buttonOne % 2 === 0 ? "Even" : "odd";

    // let i = 0;
    // while (i < 30000000) i++;

    // let findType = "";
    // if (buttonOne % 2 === 0) {
    //     findType += " Odd"
    // }
    // else {
    //     findType += "Even"
    // }

    // if (buttonTwo % 2 !== 0) {
    //     findType += "   Even"
    // }
    // else {
    //     findType += "   Odd"
    // }
    // return findType;

    //     return buttonOne % 2 === 0;
    // }

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
                <Text>{checkOddOrEven ? "Even" : "Odd"}</Text>
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
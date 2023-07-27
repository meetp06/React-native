import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard } from "react-native";

const KetBoardApi = () => {
    const [showkeyboard, setshowkeyboard] = useState("");
    const KeyBoardFunction = () => {
        const keyBoardshow = () => Keyboard.addListener("show", () => { setshowkeyboard("KeyBoard Show") });
        const keyBoardhide = () => Keyboard.addListener("hide", () => { setshowkeyboard("KeyBoard Hide") });
    }

    return (
        <View>
            <TextInput placeholder="Enter Text(KeyBoardAPI)" style={styles.textinputstyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    textinputstyle: {
        fontSize: 20,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 50,
        padding: 10,
        marginTop: 20,
        width: 200
    },
})
export default KetBoardApi;
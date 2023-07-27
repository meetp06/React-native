import React, { useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Reffunction = () => {
    const usereffunction = useRef(null);
    function callRef() {

        if (usereffunction.current.isFocused()) {
            usereffunction.current.blur();
        }
        else {
            usereffunction.current.focus();
        }
    }
    return (
        <View>
            <TextInput style={styles.TextInputStyle} placeholder="Write something...." ref={usereffunction} onFocus={() => console.log('focus')} />
            <Button title="Tap Here" onPress={callRef} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        TextInputStyle: {
            margin: 60,
            borderRadius: 50,
            borderWidth: 2,
            padding: 10,
        }
    },
);

export default Reffunction;
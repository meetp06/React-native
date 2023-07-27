import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {

    //* used for setItem
    const [value, setValue] = useState("");

    //* setItem
    const storeData = async (data) => {
        await AsyncStorage.setItem("Token", data, () => console.log("Passed Data: ", data))
    }

    const passData = () => storeData(value);
    return (

        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.mainBody}>

                <View style={styles.borderStyle}>
                    <TextInput
                        style={styles.usernameStyle}
                        placeholder="Username"
                        value={value}
                        onChangeText={(n) => setValue(n)}
                    />
                    <TextInput
                        style={styles.passwordStyle}
                        placeholder="password"
                    />
                </View>

                <View style={styles.button}>
                    <Button title="Submit" onPress={passData} />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    usernameStyle: {
        fontSize: 20,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 50,
        padding: 10,
        width: 200
    },
    passwordStyle: {
        fontSize: 20,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 50,
        padding: 10,
        marginTop: 20,
        width: 200
    },
    borderStyle: {

    },
    button: {
        margin: 20
    }
})

export default LoginPage;
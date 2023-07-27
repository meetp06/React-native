import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput, View, Platform, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShowAlert from './alertApl';
import KetBoardApi from './keyBoard';
import OSInformation from './plateform'

const AsyncStorageAPI = () => {

    const [value, setValue] = useState('');
    const storeData = async (datavalue) => {
        const tokendata = JSON.stringify(datavalue);
        await AsyncStorage.setItem("token1", tokendata)
    }
    const passData = () => storeData(value);

    const [getValue, setGetValue] = useState('');
    const gettingValue = async () => {
        const getdata = await AsyncStorage.getItem("token1")
        const convert = JSON.parse(getdata)
        setGetValue(convert);
    }

    const [remove, setRemove] = useState('');
    const removeValue = async () => {
        const removeValueData = await AsyncStorage.removeItem("token1")
        setRemove(removeValueData);
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.mainBody}>

                <View style={styles.borderStyle}>
                    {/* //*set */}
                    <TextInput
                        style={styles.usernameStyle}
                        placeholder="Username"
                        value={value}
                        onChangeText={(n) => setValue(n)}
                    />
                    {/* //*remove */}
                    <TextInput
                        style={styles.passwordStyle}
                        placeholder="ReamoveName"
                        value={remove}
                    />
                    {/* //*get */}
                    <TextInput
                        style={styles.passwordStyle}
                        placeholder="GetName"
                        value={getValue}

                    />
                    <KetBoardApi />
                </View>

                <View style={styles.button}>
                    <Button title="set" onPress={passData} />
                </View>

                <View style={styles.button}>
                    <Button title="remove" onPress={removeValue} />
                </View>

                <View style={styles.button}>
                    <Button title="get" onPress={gettingValue} />
                </View>

                <View>
                    <ShowAlert />
                </View>
                <View>
                <OSInformation/>
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
        marginTop: 15,
        marginBottom: 15,
    }
})

export default AsyncStorageAPI;
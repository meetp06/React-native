import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, AppState, BackHandler, Dimensions, FlatList, Keyboard, Linking, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "./components/customButton";

const keyName = "ShortHand";
const supportedURL = 'https://google.com';
const call = 'tel:+918140194193';
const unsupportedURL = 'https://open?team=123456';

const App = () => {

    const [value, setValue] = useState('Empty');
    const [show, setShow] = useState('Nothing');

    useEffect(() => {

        const sub = AppState.addEventListener('change', () => {
            console.log('====================================');
            console.log('current', AppState.currentState);
            console.log('====================================');
        });

        return () => {
            sub.remove();
        }

    }, []);

    const onClick = () => {

        Alert.alert('Error', 'Try again', [
            {
                text: 'ok',
                style: "destructive",
            }
        ]);

        console.log('====================================');
        console.log('clicked', Platform.select({ ios: 'Welcome to IOS', default: 'Kuch nai' }), Keyboard);

        console.log('====================================');

        doOperations(value);
    }

    const doOperations = async (value: any) => {
        const toAdd = JSON.stringify(value);
        await AsyncStorage.setItem(keyName, toAdd);
    }

    const onLink = async () => {
        try {
            const can = await Linking.canOpenURL(call);

            if (can) {
                await Linking.openURL(call);
            } else {
                Alert.alert('Error', 'Can not open');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onExit = () => {
        Alert.alert('Confirm', 'Do you want to exit?', [
            {
                text: 'Yes',
                onPress: () => BackHandler.exitApp(),
            },

            {
                text: 'No',
            }
        ]);
    }

    const onGet = async () => {
        console.log('====================================');
        console.log(Keyboard.isVisible());
        console.log('====================================');
        Keyboard.dismiss();

        const gettedValue = await AsyncStorage.getItem(keyName);
        setShow(JSON.parse(gettedValue as never) as never);
    }

    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.root}>
                <View style={styles.view}>
                    <TextInput
                        value={value}
                        placeholder="Enter"
                        onChangeText={(e) => setValue(e)}
                    />

                    <Text>
                        {Dimensions.get("window").height}
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <CustomButton children={'Click Me'} onPress={onClick} />
                        <CustomButton children={'Set Me'} onPress={onGet} />
                        <CustomButton children={'Linking'} onPress={onLink} />
                        <CustomButton children={'Exit'} onPress={onExit} />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );

};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
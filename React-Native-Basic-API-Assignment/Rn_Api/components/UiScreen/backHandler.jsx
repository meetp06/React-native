import React, { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

const BackHandlers = () => {

    useEffect(() => {
        const backButton = () => {
            Alert.alert("Exit", "Are you want to exit the application", [{
                text: 'Cancel',
                style: 'cancel',
                onPress: () => null
            },
            {
                text: 'YES',
                onPress: () => BackHandler.exitApp()
            },
            ])
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backButton);
    }, [])

    return (
        <>
        </>
    )
}

export default BackHandlers;


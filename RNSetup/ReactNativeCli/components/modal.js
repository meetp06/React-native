import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DataModel() {
    const [modalIsVisible, goToMainScreen] = useState(false);
    const MyModel = () => {
        return (
            <Text>Hello Developer!</Text>
        );
    };

    return (
        <View style={styles.ModelStyle}>
        <Button onPress={() => goToMainScreen(true)}>Tap Here</Button>
           {modalIsVisible && <MyModel />} 
        </View>
    )
    }

const styles = StyleSheet.create({
    ModelStyle:{
        flexDirection: 'row',
        justifyContent: 'row',
        height: 300,
        
    }
})
    
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

export default function UpperSection({ onCustomPress, isVisible, onCancel }: any) {

    const [inputValue, functionToChange] = useState('');

    function onCustomChange(value: any) {
        functionToChange(value);
    }

    function onGoalHandler(value: any) {
        onCustomPress(inputValue);
        functionToChange('');
        onCancel();
    }

    return <Modal visible={isVisible} animationType='fade'>

        <View style={styles.innerItems}>

            <Image
                style={styles.imgContainer}
                source={require('../assets/goal.jpeg')}
            />

            <TextInput
                style={styles.textInput}
                placeholder='Enter text!'
                onChangeText={onCustomChange}
                value={inputValue}
            />

            <View style={styles.buttonRow} >

                <View style={styles.indiButton}>
                    <Button
                        title='Add'
                        onPress={onGoalHandler}
                    />
                </View>

                <View style={styles.indiButton}>
                    <Button
                        title='Cancel'
                        onPress={onCancel}
                    />
                </View>

            </View>

        </View>
    </Modal >
}

const styles = StyleSheet.create({

    imgContainer: {
        margin: 20,
        height: 100,
        width: 100,
    },

    innerItems: {
        margin: 5,
        flexDirection: 'column',
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        padding: 5,
        margin: 2,
        width: '90%',
        borderWidth: 1.2,
        borderRadius: 8,
        borderColor: 'blue',
    },

    buttonRow: {
        flexDirection: 'row',
    },

    indiButton: {
        width: '40%',
        paddingTop: 8,
        paddingHorizontal: 8,
    },
});
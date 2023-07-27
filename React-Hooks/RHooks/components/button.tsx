import { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


export const CustomButton = memo(({ children, onPress }: any) => {

    console.log('====================================');
    console.log("Button rerendered ", children);
    console.log('====================================');

    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Text style={styles.innerText}>
                    {children}
                </Text>
            </Pressable>
        </View >
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#66ccff',
        margin: 6,
        borderRadius: 15,
        elevation: 6,
    },

    innerText: {
        fontSize: 16,
        padding: 10,
        color: 'white',
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.5,
    }
});
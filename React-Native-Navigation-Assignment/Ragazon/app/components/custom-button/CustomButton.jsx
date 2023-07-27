import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './CustomButtonStyles';

/*
 * Custom Button component
 *
 * @param {title} - the name of button.
 * @param {onPress} - onPress function.
 * @param {isLoading} - whether the button is in loading state.
 * @param {component} - component that will be visible during loading inside button.
 * @return - custom button.
 */

const CustomButton = memo(({ title, onPress, isLoading, component }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}>
                {isLoading != undefined ? (
                    isLoading ? (
                        component
                    ) : (
                        <Text style={styles.innerText}>{title}</Text>
                    )
                ) : (
                    <Text style={styles.innerText}>{title}</Text>
                )}
            </Pressable>
        </View>
    );
});

export default CustomButton;

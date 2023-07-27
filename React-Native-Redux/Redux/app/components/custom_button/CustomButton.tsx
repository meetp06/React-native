/*
 * Custom Button component
 *
 * @params children is the name of button.
 * @params onPress function
 * @return custom button.
 */

import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import customButtonStyle from './CustomButtonStyles';

const CustomButton = memo(({ title, onPress, isLoading, component }: any) => {
    return (
        <View style={customButtonStyle.container}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && customButtonStyle.pressed}>
                {isLoading != undefined ? (
                    isLoading ? (
                        component
                    ) : (
                        <Text style={customButtonStyle.innerText}>{title}</Text>
                    )
                ) : (
                    <Text style={customButtonStyle.innerText}>{title}</Text>
                )}
            </Pressable>
        </View>
    );
});

export default CustomButton;

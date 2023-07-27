import { memo } from 'react';
import { View, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './CustomTextInputStyles';
import { COLORS } from '../../theme';
import { useCustomTextInput } from './hook';

/*
 * Custom Text Input
 *
 * @param {leadingIconSrc} - prefix thing to show.
 * @param {suffixIconSrc} - suffix thing to show.
 * @param {...rest} - all the relevant props for the text field.
 * @return - custom text input.
 */

const CustomTextInput = ({ leadingIconSrc, suffixIconSrc, ...rest }) => {
    const { inputRef, handleBlur, handleFocus } = useCustomTextInput();

    return (
        <TouchableWithoutFeedback
            onFocus={handleFocus}
            onBlur={handleBlur}>
            <View
                ref={inputRef}
                style={styles.container}>
                {leadingIconSrc}
                <TextInput
                    selectionColor={COLORS.PrimaryColor}
                    style={styles.input}
                    {...rest}
                />
                {suffixIconSrc}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default memo(CustomTextInput);

import { memo, useRef } from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS } from '../../theme';
import styles from './CustomTextInputStyles';

/*
 * Custom Text Input
 *
 * @param {leadingIconSrc} - prefix thing to show.
 * @param {suffixIconSrc} - suffix thing to show.
 * @param {...rest} - all the relevant props for the text field.
 * @return - custom text input.
 */

const CustomTextInput = ({ leadingIconSrc, suffixIconSrc, ...rest }) => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.setNativeProps({
            style: {
                borderColor: COLORS.PrimaryColor,
            },
        });
    };

    const handleBlur = () => {
        inputRef.current.setNativeProps({
            style: {
                borderColor: 'grey',
            },
        });
    };

    return (
        <TouchableWithoutFeedback
            onFocus={handleFocus}
            onBlur={handleBlur}>
            <View
                ref={inputRef}
                style={styles.container}>
                {leadingIconSrc ? leadingIconSrc : null}
                <TextInput
                    selectionColor={COLORS.PrimaryColor}
                    style={styles.input}
                    {...rest}
                />
                {suffixIconSrc ? suffixIconSrc : null}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default memo(CustomTextInput);

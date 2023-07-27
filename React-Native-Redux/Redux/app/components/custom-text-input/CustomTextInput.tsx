import { memo, useRef } from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
import styles from './CustomTextInputStyle';

const CustomTextInput = ({ leadingIconSrc, suffixIconSrc, ...rest }: any) => {
    const inputRef = useRef(null) as any;

    const handleFocus = () => {
        inputRef.current.setNativeProps({
            style: {
                borderColor: 'blue',
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
                {leadingIconSrc}
                <TextInput
                    style={styles.input}
                    {...rest}
                />
                {suffixIconSrc}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default memo(CustomTextInput);

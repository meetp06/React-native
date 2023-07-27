import { useRef } from 'react';
import { COLORS } from '../../../theme';

/*
 * Custom hook for managing the custom text input.
 *
 * @returns - object having inputRef, handleBlur, handleFocus
 */

const useCustomTextInput = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef?.current?.setNativeProps({
            style: {
                borderColor: COLORS.PrimaryColor,
            },
        });
    };

    const handleBlur = () => {
        inputRef?.current?.setNativeProps({
            style: {
                borderColor: COLORS.grey,
            },
        });
    };

    return { inputRef, handleBlur, handleFocus };
};

export default useCustomTextInput;

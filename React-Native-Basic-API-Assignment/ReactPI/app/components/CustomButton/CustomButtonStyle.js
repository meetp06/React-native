import { Platform, StyleSheet } from 'react-native';

const customButtonStyle = StyleSheet.create({
    container: {
        backgroundColor: Platform.OS === 'ios' ? '#8D9EFF' : '#3B185F',
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
    },
});

export default customButtonStyle;

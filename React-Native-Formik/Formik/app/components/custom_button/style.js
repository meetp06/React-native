import { StyleSheet } from 'react-native';

const customButtonStyle = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
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

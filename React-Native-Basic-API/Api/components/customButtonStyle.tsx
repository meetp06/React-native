import { StyleSheet } from "react-native";

const CustomButtonStyle = StyleSheet.create({
    container: {
        flex: 1,
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

export default CustomButtonStyle;
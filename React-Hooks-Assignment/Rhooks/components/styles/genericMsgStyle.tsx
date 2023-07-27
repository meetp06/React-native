import { StyleSheet } from "react-native";

const GenericMsgStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        borderWidth: 1,
        height: '50%',
        width: '85%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic',
        marginTop: 20,
    },

    iconStyle: {
        width: '100%',
        height: '50%',
        aspectRatio: 16 / 9,
    },
});

export default GenericMsgStyle;
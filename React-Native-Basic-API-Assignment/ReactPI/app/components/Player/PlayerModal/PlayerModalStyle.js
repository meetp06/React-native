import { StyleSheet } from 'react-native';

const playerModalStyle = StyleSheet.create({
    upperHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },

    textHeader: {
        fontSize: 22,
        color: 'black',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },

    textEdit: {
        fontSize: 18,
        color: '#66ccff',
    },

    textContainer: {
        padding: 20,
        borderRadius: 32,
        backgroundColor: 'white',
    },

    textInputStyle: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderRadius: 22,
        fontSize: 16,
    },
});

export default playerModalStyle;

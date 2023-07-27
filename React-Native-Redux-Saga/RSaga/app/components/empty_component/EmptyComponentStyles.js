import { StyleSheet } from 'react-native';

const emptyComponentStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        width: '100%',
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
        height: undefined,
        aspectRatio: 9 / 9,
    },
});

export default emptyComponentStyle;

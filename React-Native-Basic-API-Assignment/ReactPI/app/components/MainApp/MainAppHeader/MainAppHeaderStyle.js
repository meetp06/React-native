import { StyleSheet } from 'react-native';

const mainAppHeaderStyle = StyleSheet.create({
    mainView: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerTextStyle: {
        fontSize: 20,
        color: 'black',
    },

    countContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonRow: {
        flexDirection: 'row',
    },
});

export default mainAppHeaderStyle;

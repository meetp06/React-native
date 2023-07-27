import { StyleSheet } from "react-native";

const PlayerHeaderStyle = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    backPortion: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerTextStyle: {
        fontSize: 22,
        marginLeft: 8,
        color: 'black',
    },
});

export default PlayerHeaderStyle;
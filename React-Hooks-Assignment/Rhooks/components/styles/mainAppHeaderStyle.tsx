import { StyleSheet } from "react-native";

const MainAppHeaderStyle = StyleSheet.create({
    mainView: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerTextStyle: {
        fontSize: 20,
        marginLeft: 8,
        color: 'black',
    },

    buttonRow: {
        flexDirection: 'row',
    },

});

export default MainAppHeaderStyle
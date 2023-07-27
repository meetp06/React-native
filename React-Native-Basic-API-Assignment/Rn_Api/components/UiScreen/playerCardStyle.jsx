//* Player Card Style
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxStyle: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin: 15,
        marginBottom: 15,
        height: 140,
        backgroundColor: 'rgb(237, 215, 213)',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.15,
        shadowRadius: 80.46,
        elevation: 30
    },
    cardBackgroundStyle: {
        justifyContent: 'flex-start', shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 50.00,
        elevation: 30
    },
    userNameStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
    },
    topBarStyle: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'rgb(213, 237, 236)',
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
    },
    bottomBarStyle: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        marginTop: 10,
    },
    playerInfoStyle: {
        fontSize: Platform.OS === 'android' ? 16 : 16
    },
    nameStyle: {
        fontSize: 20
    },
    editPlayerBoxStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    editPlayerStyle: {
        color: 'rgb(11, 107, 214)',
        fontSize: 19,
        marginBottom: 10,
    }
})

export default styles;
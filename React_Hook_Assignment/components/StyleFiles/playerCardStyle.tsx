//* Player Card Style

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxStyle: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin: 15,
        marginBottom: 15,
        height: 160,
        backgroundColor: 'rgb(237, 215, 213)',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.46,
        elevation: 26
    },
    cardBackgroundStyle: {
        justifyContent: 'flex-start', shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24
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
        height: 60,
        width: 60,
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
})

export default styles;
import { StyleSheet } from "react-native";

const PlayerItemStyle = StyleSheet.create({

    root: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 32,
        borderWidth: 1.3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    playerUpperRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    playerLowerRow: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    playerStatContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    name: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    statType: {
        color: 'black',
        fontWeight: '300',
    },

    statValue: {
        color: 'black',
        fontWeight: '700',
    },

    playerType: {
        color: 'black',
        fontWeight: '300',
        fontSize: 15,
    },
});

export default PlayerItemStyle;
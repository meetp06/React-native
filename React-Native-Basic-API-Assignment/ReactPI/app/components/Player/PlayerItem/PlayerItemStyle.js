import { StyleSheet } from 'react-native';

const playerItemStyle = StyleSheet.create({
    root: {
        margin: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    playerUpperRow: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'stretch',
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

    callContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    callTouchable: {
        padding: 1.5,
        borderWidth: 0.2,
        borderRadius: 12,
        marginTop: 3,
    },

    callRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    callText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});

export default playerItemStyle;

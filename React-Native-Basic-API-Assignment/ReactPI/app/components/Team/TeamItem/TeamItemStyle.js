import { StyleSheet } from 'react-native';

const teamItemStyle = StyleSheet.create({
    root: {
        margin: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'grey',
        shadowColor: '#000',
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

    playerCount: {
        color: 'black',
        fontSize: 15,
        paddingTop: 5,
        fontWeight: '400',
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

    buttonRow: {
        flexDirection: 'row',
    },
});

export default teamItemStyle;

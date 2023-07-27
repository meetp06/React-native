import { StyleSheet } from 'react-native';

const teamModalStyle = StyleSheet.create({
    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    textContainer: {
        padding: 20,
        width: '90%',
        height: 'auto',
        borderRadius: 32,
        backgroundColor: 'white',
    },

    textInputStyle: {
        fontSize: 18,
    },
});

export default teamModalStyle;

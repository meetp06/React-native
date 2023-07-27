import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    input: {
        flex: 1,
        padding: 5,
        margin: 5,
    },

    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 5,
    },
});

export default styles;

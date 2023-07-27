import { StyleSheet } from 'react-native';

const circularImageStyle = StyleSheet.create({
    root: {
        padding: 5,
    },

    imageContainer: {
        borderRadius: 100,
        padding: 1,
        borderColor: 'brown',
        width: 50,
        height: 50,
        borderWidth: 0,
    },

    image: {
        borderRadius: 30,
        width: 50,
        height: 50,
        borderWidth: 0,
    },
});

export default circularImageStyle;

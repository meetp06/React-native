import { StyleSheet } from 'react-native';
import { COLORS, horizontalScale } from '../../theme';

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    formContainer: {
        marginHorizontal: horizontalScale(10),
    },
});

export default styles;

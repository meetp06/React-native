import { StyleSheet } from 'react-native';
import { COLORS, moderateScale } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: moderateScale(50),
        fontWeight: 'bold',
        color: COLORS.black,
    },
});

export default styles;

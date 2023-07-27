import { StyleSheet } from 'react-native';
import { COLORS, moderateScale } from '../../theme';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    textContainer: {
        padding: moderateScale(20),
        borderRadius: moderateScale(26),
        backgroundColor: COLORS.white,
    },
    upperHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: moderateScale(10),
    },
    textHeader: {
        fontSize: moderateScale(20),
        color: COLORS.black,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    textEdit: {
        fontSize: moderateScale(18),
        color: COLORS.PrimaryColor,
    },
    textInputStyle: {
        padding: moderateScale(12),
        margin: moderateScale(5),
        borderWidth: 1,
        borderRadius: moderateScale(22),
        fontSize: moderateScale(16),
    },
});

export default styles;

import { StyleSheet } from 'react-native';
import { COLORS, horizontalScale, moderateScale } from '../../theme';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: COLORS.blackShade,
        padding: moderateScale(20),
        borderRadius: moderateScale(5),
        borderTopLeftRadius: moderateScale(18),
        borderBottomRightRadius: moderateScale(18),
        marginHorizontal: horizontalScale(20),
    },
    loaderComponent: {
        padding: moderateScale(10),
    },
});

export default styles;

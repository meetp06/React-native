import { StyleSheet } from 'react-native';
import { COLORS, moderateScale, verticalScale } from '../../../../theme';

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        width: '100%',
    },
    textContainer: {
        marginBottom: verticalScale(10),
    },
    textStyle: {
        fontSize: moderateScale(20),
        color: COLORS.black,
        fontStyle: 'italic',
    },
});

export default styles;

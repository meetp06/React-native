import { StyleSheet } from 'react-native';
import {
    COLORS,
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../../theme';

const style = StyleSheet.create({
    rootView: {
        backgroundColor: COLORS.white,
        borderBottomWidth: moderateScale(0.3),
        flexDirection: 'row',
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(5),
        alignItems: 'center',
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    iconStyle: {
        flex: 1,
    },
    titleContainer: {
        flex: 2,
    },
    titleStyle: {
        color: COLORS.black,
        textAlign: 'center',
        fontSize: moderateScale(17),
        fontWeight: '600',
    },
});

export default style;

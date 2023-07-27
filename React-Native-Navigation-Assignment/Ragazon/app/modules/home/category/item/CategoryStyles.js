import { StyleSheet } from 'react-native';
import {
    COLORS,
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../../../theme';

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(16),
        paddingVertical: verticalScale(8),
        borderRadius: moderateScale(10),
        borderWidth: 0.17,
        borderColor: COLORS.PrimaryColor,
        backgroundColor: COLORS.lightGrey,
        marginRight: horizontalScale(8),
    },
    selectedItemContainer: {
        backgroundColor: COLORS.PrimaryColor,
        borderColor: COLORS.PrimaryColor,
    },
    itemText: {
        fontSize: moderateScale(14),
        color: COLORS.black,
        fontWeight: '600',
    },
    selectedItemText: {
        color: COLORS.white,
    },
});

export default styles;

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
    homeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleStyle: {
        color: COLORS.black,
        fontSize: moderateScale(17),
        fontWeight: '600',
    },
    searchContainer: {
        flex: 1,
        fontSize: moderateScale(14),
        marginLeft: horizontalScale(10),
    },
});

export default style;

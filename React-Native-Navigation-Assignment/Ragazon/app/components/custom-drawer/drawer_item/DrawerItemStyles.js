import { StyleSheet } from 'react-native';
import { COLORS, moderateScale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: moderateScale(10),
    },
    imgContainer: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },
    scrollView: {
        flexGrow: 1,
    },
    profileTextContainer: {
        marginLeft: moderateScale(10),
    },
    profileNameStyle: {
        fontSize: moderateScale(16),
        marginBottom: verticalScale(5),
        color: COLORS.black,
    },
    profileEmailStyle: {
        fontSize: moderateScale(13),
        color: COLORS.grey,
        fontWeight: '600',
    },
    divider: {
        margin: moderateScale(10),
        borderBottomColor: COLORS.grey81,
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});

export default styles;

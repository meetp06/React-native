import { StyleSheet } from 'react-native';
import { COLORS, moderateScale } from '../../../../theme';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: moderateScale(5),
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        padding: moderateScale(15),
        borderRadius: moderateScale(16),
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        aspectRatio: 9 / 9,
        resizeMode: 'contain',
    },
    imageContainer: {
        padding: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameContainer: {
        margin: moderateScale(10),
    },
    textStyle: {
        color: COLORS.black,
        textAlign: 'center',
        fontSize: moderateScale(15),
        fontWeight: '400',
    },
});

export default styles;

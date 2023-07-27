import { StyleSheet } from 'react-native';
import { COLORS, moderateScale } from '../../../theme';

const styles = StyleSheet.create({
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
    },
    textEdit: {
        fontSize: moderateScale(18),
        color: COLORS.PrimaryColor,
    },
});

export default styles;

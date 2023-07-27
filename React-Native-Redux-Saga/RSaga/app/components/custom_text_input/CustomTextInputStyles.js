import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1.3,
        borderRadius: moderateScale(10),
        margin: moderateScale(8),
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(5),
    },

    input: {
        flex: 1,
        color: 'black',
        fontSize: moderateScale(16),
        padding: moderateScale(5),
        margin: moderateScale(5),
    },
});

export default styles;

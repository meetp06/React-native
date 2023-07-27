import { StyleSheet } from 'react-native';
import { COLORS, horizontalScale, moderateScale } from '../../../theme';

const styles = StyleSheet.create({
  checkOutContainer: {
    padding: moderateScale(15),
    borderTopLeftRadius: moderateScale(18),
    borderTopRightRadius: moderateScale(18),
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.PrimaryLightColor,
  },
  totalText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: COLORS.black,
  },
});

export default styles;

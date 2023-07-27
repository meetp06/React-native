import { StyleSheet } from 'react-native';
import { COLORS, horizontalScale, moderateScale } from '../../theme';

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  checkOutContainer: {
    borderTopLeftRadius: moderateScale(18),
    borderTopRightRadius: moderateScale(18),
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'row',
    backgroundColor: COLORS.PrimaryLightColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});

export default styles;

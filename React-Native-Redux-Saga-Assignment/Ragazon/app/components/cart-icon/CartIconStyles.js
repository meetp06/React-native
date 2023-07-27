import { StyleSheet } from 'react-native';
import { COLORS, horizontalScale, moderateScale } from '../../theme';

const styles = StyleSheet.create({
  cartIcon: {
    position: 'relative',
    marginRight: horizontalScale(10),
  },
  badgeStyle: {
    position: 'absolute',
    top: -moderateScale(8),
    right: -moderateScale(8),
    backgroundColor: COLORS.red,
    borderRadius: 10,
    width: moderateScale(21),
    height: moderateScale(21),
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  textStyle: {
    color: COLORS.white,
    fontSize: moderateScale(12),
    textAlign: 'center',
  },
  signOut: {
    marginLeft: horizontalScale(10),
  },
});

export default styles;

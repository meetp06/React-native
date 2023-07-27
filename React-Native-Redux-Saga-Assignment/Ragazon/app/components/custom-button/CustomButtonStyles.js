import { StyleSheet } from 'react-native';
import { COLORS, moderateScale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PrimaryColor,
    margin: moderateScale(6),
    borderRadius: moderateScale(10),
    elevation: 6,
  },
  innerText: {
    fontSize: moderateScale(16),
    padding: moderateScale(10),
    color: COLORS.white,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default styles;

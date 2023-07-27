import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  socialButton: {
    width: horizontalScale(80),
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    marginHorizontal: horizontalScale(10),
  },
  iconStyle: {
    height: verticalScale(36),
    width: horizontalScale(36),
  },
});

export default styles;

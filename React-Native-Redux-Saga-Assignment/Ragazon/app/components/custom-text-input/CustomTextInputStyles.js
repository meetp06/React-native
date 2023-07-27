import { StyleSheet } from 'react-native';
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.grey,
    borderWidth: 1.3,
    borderRadius: moderateScale(10),
    margin: moderateScale(8),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
  },
  input: {
    flex: 1,
    color: COLORS.black,
    fontSize: moderateScale(16),
    padding: moderateScale(5),
    margin: moderateScale(5),
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    paddingTop: verticalScale(15),
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(7),
  },
  category: {
    fontSize: moderateScale(20),
    color: COLORS.black,
    fontStyle: 'italic',
  },
  stickyView: {
    backgroundColor: COLORS.white,
  },
});

export default styles;

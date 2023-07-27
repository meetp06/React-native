import { StyleSheet } from 'react-native';
import { COLORS, moderateScale } from '../../theme';

const loadingScreen = StyleSheet.create({
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  loaderBox: {
    padding: moderateScale(20),
  },
  loaderImage: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
  indicatorText: {
    fontSize: moderateScale(16),
    color: COLORS.black,
    textAlign: 'center',
  },
});

export default loadingScreen;

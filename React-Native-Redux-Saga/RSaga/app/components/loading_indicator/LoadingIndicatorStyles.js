import { StyleSheet } from 'react-native';
import { moderateScale } from '../../theme';

const loadingScreen = StyleSheet.create({
  loaderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    color: 'black',
    textAlign: 'center',
  },
});

export default loadingScreen;

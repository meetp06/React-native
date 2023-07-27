import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes/metrics';

const styles = StyleSheet.create({
  image: {
    height: verticalScale(350),
    width: horizontalScale(350),
  },
  imageView: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    margin: moderateScale(20),
    marginTop: verticalScale(60),
    fontSize: moderateScale(25),
    fontStyle: 'normal',
    fontWeight: '600',
  },
});

export default styles;

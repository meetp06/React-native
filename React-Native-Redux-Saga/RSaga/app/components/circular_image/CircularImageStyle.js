import { StyleSheet } from 'react-native';
import { moderateScale } from '../../theme';

const circularImageStyle = StyleSheet.create({
  root: {
    padding: moderateScale(5),
  },

  imageContainer: {
    borderRadius: 100,
    padding: 1,
    borderColor: 'brown',
    width: moderateScale(70),
    height: moderateScale(70),
    borderWidth: 0,
  },

  image: {
    borderRadius: moderateScale(35),
    width: moderateScale(70),
    height: moderateScale(70),
    borderWidth: 0,
  },
});

export default circularImageStyle;

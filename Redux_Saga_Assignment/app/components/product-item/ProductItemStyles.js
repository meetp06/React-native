import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes';
// define your styles
const styles = StyleSheet.create({
  container: {
    height: verticalScale(240),
    margin: moderateScale(5),
    padding: moderateScale(10),
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    backgroundColor: Colors.WHITE,
  },
  image: {
    height: verticalScale(150),
    width: horizontalScale(150),
    padding: moderateScale(20),
  },
  imageView: {
    alignSelf: 'center',
  },
  productNameView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  productName: {
    fontSize: moderateScale(16.5),
    fontWeight: '400',
  },
  price: {
    fontSize: moderateScale(15),
    fontWeight: '600',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes';

// define your styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: moderateScale(16),
    backgroundColor: Colors.WHITE,
  },
  priceView: {
    alignItems: 'center',
  },
  name: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
  price: {
    fontSize: moderateScale(18),
    color: Colors.PRICE,
    marginVertical: verticalScale(8),
  },
  image: {
    width: horizontalScale(250),
    height: verticalScale(250),
    borderRadius: 8,
  },
  imageView: {
    alignItems: 'center',
    marginVertical: moderateScale(16),
  },
  description: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(16),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
    width: '98%',
  },
  cart: {
    color: Colors.BLUE,
    fontSize: moderateScale(18),
  },
  checkout: {
    color: Colors.BUY,
    fontSize: moderateScale(18),
  },
});

export default styles;

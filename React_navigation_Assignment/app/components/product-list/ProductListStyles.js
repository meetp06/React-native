import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes/metrics';

const styles = StyleSheet.create({
  image: {
    height: verticalScale(150),
    width: horizontalScale(150),
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(15),
  },
  imageContainer: {
    height: verticalScale(250),
    width: '100%',
    borderWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: 'black',
  },
  flatList: {
    flex: 1,
    alignItems: 'center',
    margin: 3,
  },
  name: {
    fontSize: moderateScale(15),
    color: 'black',
  },
  price: {
    fontSize: moderateScale(14),
    color: 'black',
  },
  containerStyle: {
    paddingBottom: verticalScale(950),
  },
});

export default styles;

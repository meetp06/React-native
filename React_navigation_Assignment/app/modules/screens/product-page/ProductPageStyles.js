import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes/metrics';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'column',
    marginTop: verticalScale(30),
    padding: moderateScale(10),
  },
  image: {
    height: verticalScale(300),
    width: horizontalScale(300),
    margin: moderateScale(20),
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
  },
  imageView: {
    borderWidth: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: moderateScale(30),
    fontWeight: '500',
  },
  nameView: {
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(10),
    alignItems: 'center',
  },
  des: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(7),
    fontWeight: '500',
  },
  textDes: {
    fontSize: moderateScale(14),
    padding: moderateScale(8),
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    padding: moderateScale(10),
    backgroundColor: '#edefff',
    height: verticalScale(180),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    marginTop: verticalScale(5),
  },
  price: {
    fontSize: moderateScale(25),
    fontWeight: '600',
    textAlign: 'left',
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(5),
    height: verticalScale(40),
    width: horizontalScale(140),
    backgroundColor: '#efece8',
    borderRadius: 20,
  },
  cartText: {
    fontSize: moderateScale(18),
  },
  touchableOpacity: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'flex-end',
    padding: moderateScale(10),
  },
  icon: {
    marginRight: horizontalScale(6),
    marginLeft: horizontalScale(3),
  },
});

export default styles;

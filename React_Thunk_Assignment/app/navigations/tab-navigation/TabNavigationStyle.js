import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../themes';

// define your styles
const styles = StyleSheet.create({
  magnifyingGlassIcon: {
    marginLeft: horizontalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    width: horizontalScale(250),
    flexDirection: 'row',
  },
  shoppingCartSimpleIcon: {
    marginRight: horizontalScale(20),
    marginTop: verticalScale(10),
    flexDirection: 'row',
  },
  inputFiled: {
    marginLeft: horizontalScale(10),
  },
  badge: {
    fontSize: moderateScale(11),
    textAlign: 'center',
    flex: 1,
    marginTop: verticalScale(2),
  },
  badgeView: {
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    marginLeft: horizontalScale(15),
    marginBottom: verticalScale(20),
    bottom: -6,
    backgroundColor: 'white',
    width: horizontalScale(19),
    height: verticalScale(19),
  },
  search: {
    margin: moderateScale(5),
  },
  logout: {
    marginRight: '10%',
    marginBottom: '4%',
  },
});

//make this component available to the app
export default styles;

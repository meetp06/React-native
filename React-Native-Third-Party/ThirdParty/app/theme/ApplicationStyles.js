import { StyleSheet } from 'react-native';
import Colors from './Colors';
import { moderateScale } from './Metrics';

const applicationStyles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenGrow: {
    flexGrow: 1,
  },
  screenWhite: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  screenTitleStyle: {
    fontSize: moderateScale(17),
    color: Colors.black,
  },
  drawerTitleStyle: {
    fontSize: moderateScale(15),
    color: Colors.black,
  },
  errorTextStyle: {
    marginLeft: moderateScale(10),
    fontSize: moderateScale(14),
    color: Colors.red,
  },
});

export default applicationStyles;

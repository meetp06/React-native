import { StyleSheet } from 'react-native';
import Color from './Colors';
import { horizontalScale, moderateScale } from './Matrics';

const ApplicationStyle = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerName: {
    fontSize: moderateScale(30),
    fontWeight: '500',
    alignSelf: 'center',
    color: Color.BlueC,
    fontFamily: 'Smooch',
  },
  iconPositionLeftSide: {
    marginLeft: horizontalScale(10),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  iconPositionRightSide: {
    marginRight: horizontalScale(10),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  drawerLabelStyle: {
    color: Color.BlueC,
    fontSize: moderateScale(17),
    fontFamily: 'Cousine-Bold',
  },
});

export default ApplicationStyle;

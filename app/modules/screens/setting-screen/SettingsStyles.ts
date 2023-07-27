import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../theme';
import Color from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: moderateScale(12),
    marginLeft: horizontalScale(22),
  },
  fieldView: {
    flexDirection: 'row',
    flex: 1,
    width: '80%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  icon: {
    alignSelf: 'center',
  },
  textView: {
    margin: moderateScale(10),
    alignSelf: 'center',
  },
  text: {
    fontSize: moderateScale(20),
    fontWeight: '400',
    marginLeft: horizontalScale(10),
    fontFamily: 'Cousine-Regular',
  },
  headerView: {
    flexDirection: 'row',
    margin: moderateScale(20),
  },
  image: {
    height: verticalScale(90),
    width: horizontalScale(90),
    borderRadius: moderateScale(50),
    borderWidth: 1,
    resizeMode: 'cover',
  },
  headerText: {
    flexDirection: 'column',
    alignSelf: 'center',
    margin: moderateScale(10),
    marginLeft: horizontalScale(30),
  },
  headerNameView: {
    margin: moderateScale(5),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  userName: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: Color.BlueC,
    fontFamily: 'Cousine-Regular',
  },
  userEmail: {
    fontSize: moderateScale(15),
    fontWeight: '400',
    color: Color.EmailColor,
    fontFamily: 'Cousine-Regular',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: moderateScale(15),
    borderRadius: moderateScale(50),
    borderWidth: 1,
  },
  footerText: {
    fontSize: moderateScale(23),
    fontWeight: '600',
    margin: moderateScale(10),
    fontFamily: 'Cousine-Bold',
  },
  toggle: {
    alignSelf: 'center',
    marginLeft: '25%',
  },
  root: {
    flex: 1,
    backgroundColor: Color.White,
  },
});

export default styles;

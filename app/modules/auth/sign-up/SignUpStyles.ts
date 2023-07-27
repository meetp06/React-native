import {StyleSheet} from 'react-native';
import Color from '../../../theme/Colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme/Matrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BackgroundColor,
  },
  logo: {
    width: horizontalScale(150),
    height: verticalScale(150),
    marginBottom: verticalScale(30),
  },
  input: {
    width: '80%',
    height: verticalScale(40),
    backgroundColor: Color.SecondaryColorA,
    marginBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(5),
    fontSize: moderateScale(16),
    fontFamily: 'Cousine-Regular',
  },
  button: {
    width: '90%',
    height: verticalScale(50),
    backgroundColor: Color.BlueB,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    marginTop: verticalScale(20),
    marginBottom: '7%',
  },
  buttonText: {
    color: Color.BlueC,
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    fontFamily: 'Cousine-Bold',
  },
  signupText: {
    marginTop: verticalScale(20),
    color: Color.PrimaryColorD,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    fontFamily: 'Cousine-Regular',
  },
  accountText: {
    marginTop: verticalScale(20),
    color: Color.White,
    fontSize: moderateScale(16),
    marginRight: horizontalScale(10),
    alignSelf: 'center',
    fontFamily: 'Cousine-Regular',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  socialButton: {
    width: horizontalScale(80),
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    marginHorizontal: horizontalScale(10),
  },
  footerText: {
    flexDirection: 'row',
    height: verticalScale(40),
  },
  appName: {
    color: Color.White,
    fontSize: moderateScale(30),
    fontWeight: '700',
    marginBottom: verticalScale(15),
    fontFamily: 'Cousine-Bold',
  },
  iconStyle: {
    height: verticalScale(36),
    width: horizontalScale(36),
  },
  orText: {
    fontSize: moderateScale(17),
    fontWeight: '600',
    color: Color.White,
    marginTop: verticalScale(10),
    fontFamily: 'Cousine-Regular',
  },
  contentContainerStyle: {
    flex: 1,
    backgroundColor: Color.BackgroundColor,
  },
  errorText: {
    color: Color.ErrorColor,
    fontSize: moderateScale(15),
    fontWeight: '600',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {moderateScale, verticalScale} from '../../../theme/matrix';

const styles = StyleSheet.create({
  topImage: {
    height: verticalScale(200),
    width: '100%',
    backgroundColor: '#e5e7ef',
  },
  headerText: {
    height: verticalScale(100),
    margin: moderateScale(20),
  },
  firstText: {
    fontSize: moderateScale(30),
    letterSpacing: 2,
    fontWeight: '500',
    color: '#1f2582',
  },
  secondText: {
    fontSize: moderateScale(25),
    letterSpacing: 3,
    fontWeight: '400',
    color: '#1f2582',
  },
  body: {
    backgroundColor: colors.backGroundColor,

    flex: 1,
  },
  textInputView: {
    padding: moderateScale(15),
    backgroundColor: '#e8f2f8',
    margin: moderateScale(20),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#a7aed4',
  },
  textInput: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(20),
    borderBottomWidth: 0.8,
    height: verticalScale(60),
  },
  loginText: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    marginTop: verticalScale(5),
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
    backgroundColor: '#d3cae2',
    height: verticalScale(40),
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(25),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  signupText: {
    borderBottomWidth: 1,
    color: '#355560',
  },
  errorText: {
    color: 'red',
    marginBottom: verticalScale(10),
  },
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.backGroundColor,
    flex: 1,
  },
});

export default styles;

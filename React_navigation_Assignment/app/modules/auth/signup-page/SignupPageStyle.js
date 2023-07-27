import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes/metrics';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(15),
  },
  headerText: {
    fontSize: moderateScale(22),
    fontWeight: '500',
    letterSpacing: 1,
    color: '#006064',
  },
  root: {
    flex: 1,
    backgroundColor: '#E0F2F1',
  },
  loginText: {
    color: '#6200EA',
    marginLeft: horizontalScale(5),
  },
  createAccount: {
    flexDirection: 'row',
    margin: moderateScale(8),
  },
  body: {
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
  },
  inputName: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    marginBottom: verticalScale(7),
    color: '#004D40',
  },
  inputFiled: {
    borderRadius: 5,
    borderWidth: 0.5,
    width: horizontalScale(300),
    height: verticalScale(40),
    padding: moderateScale(7),
  },
  inputFiledView: {
    marginVertical: verticalScale(16),
  },
  titleView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  footer: {
    justifyContent: 'center',
  },
  signUpView: {
    margin: moderateScale(35),
    backgroundColor: '#B2DFDB',
    height: verticalScale(50),
    width: '80%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: moderateScale(20),
    fontWeight: '400',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    color: '#004D40',
  },
  scrollView: {
    flex: 1,
  },
  textStyle: {
    color: '#006064',
  },
  errorText: {
    color: 'red',
    marginTop: verticalScale(10),
  },
});
export default styles;

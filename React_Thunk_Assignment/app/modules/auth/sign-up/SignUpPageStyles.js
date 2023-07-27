import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes';

const styles = StyleSheet.create({
  image: {
    height: verticalScale(260),
    width: horizontalScale(260),
    alignSelf: 'center',
  },
  safeAreaView: {
    flex: 1,
  },
  textInputView: {
    padding: moderateScale(15),
    margin: moderateScale(25),
    borderRadius: moderateScale(20),
  },
  textInput: {
    fontSize: moderateScale(18),
    marginBottom: verticalScale(10),
    borderBottomWidth: 0.8,
    height: verticalScale(50),
    marginTop: verticalScale(10),
  },
  signupText: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    marginTop: verticalScale(5),
    color: Colors.WHITE,
  },
  signupView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    backgroundColor: Colors.BLACK,
    height: verticalScale(40),
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(30),
  },
  signupLinkText: {
    borderBottomWidth: 1,
    color: Colors.LOGINCOLOR,
  },
  errorText: {
    color: 'red',
    marginBottom: verticalScale(5),
  },
  root: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  header: {
    height: verticalScale(220),
    width: horizontalScale(240),
    alignSelf: 'center',
    marginTop: verticalScale(40),
  },
});
export default styles;

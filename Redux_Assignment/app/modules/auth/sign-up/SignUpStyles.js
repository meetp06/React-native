import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {moderateScale, verticalScale} from '../../../theme/matrix';

const styles = StyleSheet.create({
  image: {
    height: verticalScale(185),
    width: '100%',
  },
  safeAreaView: {
    flex: 1,
  },
  body: {
    backgroundColor: colors.backGroundColor,
    height: '100%',
  },
  headerText: {
    fontSize: moderateScale(27),
    margin: moderateScale(20),
    fontWeight: '500',
    letterSpacing: 2,
    color: '#1f2582',
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
  signupText: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    marginTop: verticalScale(5),
  },
  signupView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
    backgroundColor: '#d3cae2',
    height: verticalScale(40),
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  signupLinkText: {
    borderBottomWidth: 1,
    color: '#355560',
  },
  errorText: {
    color: 'red',
    marginBottom: verticalScale(10),
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../../themes';

const styles = StyleSheet.create({
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
    backgroundColor: 'black',
    height: verticalScale(50),
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(30),
  },
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginImage: {
    height: verticalScale(320),
    width: horizontalScale(320),
    alignSelf: 'center',
  },
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageView: {
    flex: 1,
  },
  inputView: {
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
    marginRight: horizontalScale(10),
  },
  textInput: {
    fontSize: moderateScale(20),
    marginBottom: verticalScale(20),
    borderBottomWidth: 0.8,
    height: verticalScale(60),
    width: '80%',
  },
  errorText: {
    color: 'red',
  },
  inputFiledView: {
    margin: moderateScale(10),
  },
  inputBoxView: {
    width: '90%',
    alignSelf: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: moderateScale(20),
    textAlign: 'center',
    fontWeight: '500',
    padding: moderateScale(10),
  },
  createAcoountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  createAcoount: {
    fontSize: moderateScale(15),
  },
});

export default styles;

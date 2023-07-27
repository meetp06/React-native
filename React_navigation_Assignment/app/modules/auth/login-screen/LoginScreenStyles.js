import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes/metrics';

const styles = StyleSheet.create({
  appNameStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '80%',
  },
  mainView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  imageBackGround: {
    flex: 1,
    justifyContent: 'center',
  },
  appIcon: {
    height: verticalScale(160),
    width: horizontalScale(160),
    alignItems: 'center',
    tintColor: 'white',
  },
  inputFiled: {
    marginTop: verticalScale(50),
    height: verticalScale(250),
    marginLeft: '9%',
    width: '100%',
  },
  logIn: {
    fontSize: moderateScale(20),
    color: 'black',
    padding: moderateScale(10),
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: '#F9FBE7',
    paddingRight: horizontalScale(30),
    paddingLeft: horizontalScale(30),
  },
  loginView: {
    marginTop: '10%',
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: moderateScale(12),
    backgroundColor: '#E0F2F1',
    // height: verticalScale(45),
    fontSize: moderateScale(20),
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: horizontalScale(10),
  },
  filedView: {
    flex: 1,
    flexDirection: 'column',
    width: '87%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainFiledView: {
    flexDirection: 'row',
  },
  errorFiled: {
    flexDirection: 'row',
  },
  textStyle: {
    color: 'red',
    marginTop: '4%',
    fontSize: moderateScale(15),
    width: '100%',
    marginLeft: horizontalScale(90),
  },
  separator: {
    borderWidth: 0.5,
    width: '100%',
    marginTop: verticalScale(15),
    borderColor: 'white',
  },
  footerBar: {
    margin: moderateScale(25),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    backgroundColor: '#F9FBE7',
  },
  bottomText: {
    fontSize: moderateScale(20),
    color: 'black',
    padding: moderateScale(15),
    alignSelf: 'center',
  },
});

export default styles;

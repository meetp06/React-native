import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes/metrics';
const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerStyle: {
    fontSize: moderateScale(18),
    fontWeight: '500',
  },
  nameInput: {
    fontSize: moderateScale(15),
  },
  container: {
    margin: moderateScale(20),
    flexDirection: 'column',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: verticalScale(50),
    width: '80%',
    alignContent: 'center',
    margin: moderateScale(20),
  },
  adressView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    height: verticalScale(80),
    width: '80%',
    alignContent: 'center',
    margin: moderateScale(20),
  },
  adressicon: {
    marginTop: verticalScale(7),
    marginLeft: horizontalScale(8),
  },
  adressInput: {
    borderRadius: 10,
    height: verticalScale(70),
    width: '80%',
    color: 'black',
    fontWeight: '400',
    alignContent: 'center',
    alignSelf: 'center',
    padding: moderateScale(10),
    fontSize: moderateScale(15),
  },
  saveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(10),
  },
  save: {
    fontSize: moderateScale(20),
    margin: moderateScale(20),
    backgroundColor: '#ecf4ee',
    borderRadius: 15,
    borderWidth: 0.5,
    padding: 5,
    width: horizontalScale(80),
    textAlign: 'center',
  },
  icon: {
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(10),
  },
  textStyle: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: '8%',
    fontSize: moderateScale(13),
  },
});

export default styles;

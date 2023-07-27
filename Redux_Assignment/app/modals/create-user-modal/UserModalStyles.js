import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme/matrix';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: moderateScale(10),
    marginVertical: verticalScale(15),
    borderRadius: moderateScale(5),
    height: verticalScale(60),
  },
  button: {
    backgroundColor: colors.backGroundColor,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    marginTop: verticalScale(10),
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: 'blue',
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  openButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  backView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: horizontalScale(20),
  },
});

export default styles;

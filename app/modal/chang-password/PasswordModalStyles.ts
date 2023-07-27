import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';
import Color from '../../theme/Colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.SecondaryColorA,
  },
  modalContent: {
    backgroundColor: Color.White,
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    width: '80%',
  },
  backButton: {
    position: 'absolute',
    top: verticalScale(5),
    left: horizontalScale(5),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: verticalScale(20),
    textAlign: 'center',
    fontFamily: 'Cousine-Bold',
  },
  input: {
    borderWidth: 1,
    borderColor: Color.EmailColor,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    marginBottom: verticalScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: verticalScale(20),
  },
  cancelButton: {
    backgroundColor: Color.EmailColor,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    marginRight: horizontalScale(10),
  },
  saveButton: {
    backgroundColor: Color.BackgroundColor,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  buttonText: {
    color: Color.ErrorColor,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    fontFamily: 'Cousine-Regular',
  },
});

export default styles;

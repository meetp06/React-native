import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../../theme';
import Color from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  centerImage: {
    width: horizontalScale(110),
    height: verticalScale(120),
    marginBottom: verticalScale(20),
    resizeMode: 'cover',
    borderRadius: moderateScale(50),
    borderColor: Color.Black,
  },
  input: {
    height: verticalScale(40),
    borderColor: Color.Black,
    borderWidth: 1,
    marginBottom: verticalScale(10),
    padding: moderateScale(10),
    width: '80%',
    alignSelf: 'center',
    borderRadius: moderateScale(15),
  },
  addButton: {
    width: horizontalScale(200),
    height: verticalScale(40),
    backgroundColor: Color.BlueA,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(50),
    marginBottom: verticalScale(15),
  },
  backgroundImage: {
    height: verticalScale(200),
    width: '100%',
  },
  headerText: {
    position: 'absolute',
    color: Color.White,
    fontSize: moderateScale(40),
    fontWeight: '600',
    marginTop: verticalScale(130),
    marginLeft: horizontalScale(15),
    fontFamily: 'Cousine-Bold',
  },
  userImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  footerText: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: Color.White,
    fontFamily: 'Cousine-Bold',
  },
  inputFiled: {
    flex: 1,
  },
});

export default styles;

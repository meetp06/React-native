import { StyleSheet } from 'react-native';
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  formContainer: {
    backgroundColor: COLORS.blackShade,
    padding: moderateScale(20),
    borderRadius: moderateScale(5),
    borderTopLeftRadius: moderateScale(18),
    borderBottomRightRadius: moderateScale(18),
    marginHorizontal: horizontalScale(20),
  },
  loaderComponent: {
    padding: moderateScale(10),
  },
  loginTextContainer: {
    marginVertical: verticalScale(20),
  },
  scrollView: {
    paddingBottom: verticalScale(20),
  },
  loginTextStyle: {
    fontSize: moderateScale(30),
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  loginContainer: {
    justifyContent: 'center',
  },
  registerContainer: {
    marginBottom: verticalScale(20),
  },
  newContainer: {
    textAlign: 'center',
    fontSize: moderateScale(15),
    marginBottom: verticalScale(5),
    color: COLORS.black,
  },
  divider: {
    margin: moderateScale(10),
    height: 1,
    backgroundColor: COLORS.grey81,
    marginVertical: verticalScale(1),
  },
});

export default styles;

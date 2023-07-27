import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';
import Color from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.SecondaryColorA,
  },
  osName: {
    fontSize: moderateScale(18),
    alignSelf: 'center',
    fontWeight: '500',
    fontFamily: 'Cousine-Regular',
  },
  osVersion: {
    fontSize: moderateScale(14),
    alignSelf: 'center',
    fontFamily: 'Cousine-Regular',
  },
  osVersionView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: verticalScale(15),
  },
  versionInfo: {
    marginLeft: horizontalScale(5),
  },
  horizontalline: {
    borderWidth: 0.5,
    margin: moderateScale(12),
  },
  headerGif: {
    resizeMode: 'contain',
    flex: 1,
    margin: moderateScale(10),
    alignSelf: 'center',
    height: verticalScale(200),
    width: '90%',
    marginBottom: verticalScale(50),
    borderColor: Color.Black,
  },
});
export default styles;

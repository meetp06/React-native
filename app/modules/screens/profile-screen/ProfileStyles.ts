import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../../theme';
import Color from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.UserBackground,
  },
  image: {
    width: horizontalScale(200),
    height: verticalScale(200),
    borderRadius: moderateScale(100),
    marginBottom: verticalScale(20),
  },
  name: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    marginRight: horizontalScale(7),
    alignSelf: 'center',
    fontFamily: 'Cousine-Regular',
  },
  email: {
    fontSize: moderateScale(18),
    color: Color.EmailColor,
  },
  nameView: {
    flexDirection: 'row',
  },
  root: {
    flex: 1,
  },
});

export default styles;

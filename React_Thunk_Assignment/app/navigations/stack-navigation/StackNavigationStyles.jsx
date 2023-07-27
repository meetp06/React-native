import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '../../themes';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableOpacity: {
    flexDirection: 'row',
  },
  text: {
    fontSize: moderateScale(17),
    color: Colors.BACKCOLOR,
    alignSelf: 'center',
  },
});

export default styles;

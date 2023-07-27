import {StyleSheet} from 'react-native';
import {Colors, moderateScale, verticalScale} from '../../../themes';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameView: {
    height: verticalScale(46),
    borderWidth: 1,
    margin: moderateScale(9),
    borderRadius: 10,
    backgroundColor: '#666362',
  },
  name: {
    fontSize: moderateScale(15),
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    margin: moderateScale(10),
    color: Colors.WHITE,
  },
});

export default styles;

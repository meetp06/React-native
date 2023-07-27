import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameView: {
    height: verticalScale(40),
    borderWidth: 1,
    margin: moderateScale(9),
    borderRadius: 10,
    backgroundColor: '#666362',
  },
  name: {
    fontSize: moderateScale(15),
    fontWeight: '600',
    margin: moderateScale(6),
    color: Colors.WHITE,
    marginRight: horizontalScale(10),
    textAlign: 'center',
    marginLeft: horizontalScale(10),
  },
});

export default styles;

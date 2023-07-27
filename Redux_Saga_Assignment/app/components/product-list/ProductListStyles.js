import {StyleSheet} from 'react-native';
import {Colors, verticalScale} from '../../themes';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  containerStyle: {
    justifyContent: 'center',
    margin: 5,
  },
  error: {
    textAlign: 'center',
    flex: 1,
  },
  indicator: {
    height: verticalScale(200),
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;

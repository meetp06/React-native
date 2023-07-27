import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(16),
    backgroundColor: 'white',
  },
  gifContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(16),
  },
  gif: {
    width: horizontalScale(400),
    height: verticalScale(400),
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  value: {
    fontSize: moderateScale(16),
  },
  finalValue: {
    color: 'green',
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    alignSelf: 'center',
  },
  finalValueView: {
    borderWidth: 0.5,
    width: '100%',
    alignSelf: 'center',
    marginTop: '7%',
    marginBottom: '5%',
  },
  footer: {
    margin: moderateScale(20),
    alignSelf: 'center',
    backgroundColor: Colors.BLACK,
    height: '6%',
    width: '70%',
    borderRadius: moderateScale(10),
  },
  bottomText: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    color: Colors.WHITE,
    textAlign: 'center',
    alignItems: 'center',
    margin: moderateScale(5),
  },
});

export default styles;

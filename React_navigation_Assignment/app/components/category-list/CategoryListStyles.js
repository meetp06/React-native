import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../themes/metrics';

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  mainView: {
    height: verticalScale(35),
    width: '100%',
  },
  borderStyle: {
    borderTopRightRadius: horizontalScale(50),
    borderBottomLeftRadius: verticalScale(50),
    borderTopLeftRadius: horizontalScale(50),
    padding: moderateScale(5),
    borderWidth: 0.5,
    marginRight: horizontalScale(7),
    marginLeft: horizontalScale(7),
    backgroundColor: '#ebeef1',
  },
  textStyle: {
    fontSize: moderateScale(14),
    paddingRight: horizontalScale(10),
    paddingLeft: horizontalScale(10),
  },
  mainFlatlist: {
    flexDirection: 'row',
  },
});

export default styles;

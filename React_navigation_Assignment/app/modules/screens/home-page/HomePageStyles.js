import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes/metrics';

const styles = StyleSheet.create({
  categoryView: {
    margin: moderateScale(20),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderEndColor: '#00003e',
    backgroundColor: '#f3fefc',
    width: horizontalScale(350),
    flexDirection: 'row',
  },
  textInput: {
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(10),
    fontWeight: '400',
    alignSelf: 'center',
    color: 'black',
  },
  searchIcon: {
    margin: moderateScale(3),
    alignSelf: 'center',
  },
  screenStyle: {
    backgroundColor: '#eaf2ef',
  },
  adImage: {
    height: verticalScale(60),
    width: horizontalScale(100),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  adImageView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: moderateScale(12),
    backgroundColor: '#c4cde6',
    height: verticalScale(80),
    borderRadius: 20,
    borderWidth: 1,
  },
  textStyle: {
    alignSelf: 'center',
    height: verticalScale(60),
    width: horizontalScale(200),
    fontWeight: '400',
    marginLeft: moderateScale(18),
    fontSize: moderateScale(15),
    color: 'black',
  },
  categoryStyle: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  searchTextView: {
    flexDirection: 'row',
  },
  searchText: {
    fontSize: moderateScale(20),
    fontWeight: '400',
    marginLeft: horizontalScale(10),
  },
});

export default styles;

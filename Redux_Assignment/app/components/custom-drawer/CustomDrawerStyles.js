import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme/matrix';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backGroundColor,
  },
  scrollView: {
    backgroundColor: colors.backGroundColor,
  },
  userBackStyle: {
    padding: moderateScale(20),
  },
  user: {
    height: verticalScale(200),
    width: horizontalScale(140),
    margin: moderateScale(20),
    borderRadius: moderateScale(40),
    marginBottom: verticalScale(40),
  },
  userDetailView: {
    flexDirection: 'column',
    marginLeft: horizontalScale(20),
  },
  detailsText: {
    fontSize: moderateScale(21),
    marginBottom: verticalScale(10),
    fontWeight: '500',
  },
  emailText: {
    fontSize: moderateScale(15),
    marginBottom: verticalScale(10),
    fontWeight: '400',
  },
  listView: {
    flex: 1,
    borderWidth: 0.5,
  },
  footer: {
    padding: moderateScale(20),
    borderTopWidth: 1,
  },
  footerTextColor: {
    fontSize: moderateScale(20),
    fontWeight: '300',
    marginLeft: horizontalScale(20),
  },
});

export default styles;

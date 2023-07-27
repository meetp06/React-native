import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes/metrics';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: moderateScale(10),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontWeight: '500',
  },
  gif: {
    height: verticalScale(250),
    width: horizontalScale(250),
  },
  gifView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  orderText: {
    fontSize: moderateScale(20),
    fontWeight: '400',
    alignSelf: 'center',
  },
  bodyHeader: {
    margin: moderateScale(15),
    height: verticalScale(300),
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
  },
  bodyHeaderText: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    margin: 10,
  },
  footer: {
    margin: moderateScale(15),
    height: verticalScale(80),
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
  },
  paymentText: {
    fontSize: moderateScale(15),
    fontWeight: '400',
    margin: 5,
  },
  bottomImage: {
    height: verticalScale(50),
    width: horizontalScale(50),
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomImageApple: {
    height: verticalScale(40),
    width: horizontalScale(60),
  },
  bottomImageGpay: {
    height: verticalScale(38),
    width: horizontalScale(60),
  },
  bottomImageVisa: {
    height: verticalScale(35),
    width: horizontalScale(60),
  },
  divider: {
    borderWidth: horizontalScale(0.5),
    width: '100%',
  },
  summaryText: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    margin: moderateScale(8),
  },
  summaryView: {
    padding: moderateScale(11),
  },
  totalText: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    margin: moderateScale(10),
    marginTop: verticalScale(30),
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryValue: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    marginTop: verticalScale(8),
  },
  totalValue: {
    fontSize: moderateScale(18),
    fontWeight: '500',
    marginTop: verticalScale(28),
  },
});

export default styles;

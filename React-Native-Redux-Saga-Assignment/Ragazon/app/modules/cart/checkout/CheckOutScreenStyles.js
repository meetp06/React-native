import { StyleSheet } from 'react-native';
import { COLORS, moderateScale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  rootView: {
    flexGrow: 1,
    backgroundColor: COLORS.PrimaryColor,
  },
  upperContainer: {
    flex: 1,
    backgroundColor: COLORS.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thanksStyle: {
    fontSize: moderateScale(35),
    fontWeight: 'bold',
    color: COLORS.white,
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: COLORS.white,
    padding: moderateScale(15),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    marginTop: verticalScale(30),
    flex: 1,
  },
  logoCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryTextStyle: {
    fontSize: moderateScale(17),
    color: COLORS.black,
    fontWeight: '700',
  },
  infoTextStyle: {
    color: COLORS.grey,
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  summaryContainer: {
    marginBottom: verticalScale(20),
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.grey81,
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15),
  },
  orderTotalTextStyle: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: moderateScale(17),
  },
  thanksPurchasingTextStyle: {
    textAlign: 'center',
    fontSize: moderateScale(17),
    marginBottom: verticalScale(5),
  },
  shippingTextStyle: {
    textAlign: 'center',
    fontSize: moderateScale(15),
    color: COLORS.grey,
  },
});

export default styles;

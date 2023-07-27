import { StyleSheet } from 'react-native';
import { COLORS, moderateScale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: moderateScale(5),
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  block: {
    padding: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
  columnBlock: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  columnBlockTextStyle: {
    fontSize: moderateScale(16),
    color: COLORS.mediumGrey,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orderId: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(8),
    color: COLORS.black,
    textAlign: 'center',
  },

  containedBlock: {
    borderRadius: 12,
    marginTop: verticalScale(4),
    backgroundColor: COLORS.PrimaryLightColor,
  },
});

export default styles;

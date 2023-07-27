import { StyleSheet } from 'react-native';
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: moderateScale(15),
    borderRadius: moderateScale(16),
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 9 / 9,
    resizeMode: 'contain',
  },
  imageContainer: {
    height: moderateScale(90),
    width: moderateScale(90),
    padding: moderateScale(10),
  },
  nameContainer: {
    margin: moderateScale(10),
  },
  category: {
    fontSize: moderateScale(13),
    color: COLORS.grey,
  },
  infoContainer: {
    flex: 1,
    padding: moderateScale(15),
  },
  textStyle: {
    color: COLORS.black,
    fontSize: moderateScale(17),
    marginBottom: verticalScale(5),
    fontWeight: '500',
  },
  priceTextStyle: {
    color: COLORS.black,
    fontSize: moderateScale(17),
    textDecorationLine: 'none',
    fontWeight: '500',
  },
  priceContainer: {
    marginTop: verticalScale(7),
  },
  slashTextStyle: {
    color: COLORS.grey,
    textDecorationLine: 'line-through',
    fontSize: moderateScale(15),
  },
  qtyTextStyle: {
    fontSize: moderateScale(15),
    marginRight: horizontalScale(10),
  },
  qtyContainer: {
    flexDirection: 'row',
  },
  count: {
    marginHorizontal: horizontalScale(10),
    fontSize: moderateScale(16),
    color: COLORS.red,
  },
  deleteQtyRow: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
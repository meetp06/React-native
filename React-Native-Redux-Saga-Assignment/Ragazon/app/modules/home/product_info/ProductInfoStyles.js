import { StyleSheet } from 'react-native';
import { COLORS, moderateScale, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    width: '100%',
    aspectRatio: 12 / 9,
    resizeMode: 'contain',
  },
  imageContainer: {
    padding: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    borderWidth: 1,
    marginTop: verticalScale(10),
    padding: moderateScale(20),
    borderBottomWidth: 0,
    backgroundColor: COLORS.PrimaryLightColor,
    borderTopLeftRadius: moderateScale(32),
    borderTopRightRadius: moderateScale(32),
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: COLORS.black,
  },
  categoryRow: {
    flexDirection: 'row',
    marginBottom: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: moderateScale(17),
    color: COLORS.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: moderateScale(17),
    color: COLORS.black,
  },
  descriptionTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: verticalScale(10),
  },
  descriptionText: {
    fontSize: moderateScale(15),
    color: COLORS.black,
    marginBottom: verticalScale(10),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: moderateScale(18),
    color: COLORS.black,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.chineseSilver,
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;

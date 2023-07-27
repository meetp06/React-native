import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../themes/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: moderateScale(12),
    height: verticalScale(170),
    borderWidth: 0.5,
    backgroundColor: '#efece8',
    borderRadius: 10,
    borderColor: 'white',
  },
  detailView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '85%',
    width: '90%',
  },
  discountPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: moderateScale(17),
  },
  quantityText: {
    fontSize: moderateScale(17),
    marginRight: horizontalScale(10),
  },
  offerPriceText: {
    fontSize: moderateScale(17),
  },
  quantityStyle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: moderateScale(17),
  },
  lastRowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(9),
  },
  offerImage: {
    height: verticalScale(45),
    width: horizontalScale(45),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountText: {
    alignSelf: 'center',
  },
  priceStyle: {
    alignSelf: 'center',
    fontSize: moderateScale(17),
  },
});

export default styles;

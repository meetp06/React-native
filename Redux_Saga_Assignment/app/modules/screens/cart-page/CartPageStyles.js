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
    justifyContent: 'space-between',
  },
  cartList: {
    flexGrow: 1,
    paddingBottom: verticalScale(16),
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(16),
    borderWidth: 1,
    borderColor: Colors.PRICE,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
  },
  cartItemImage: {
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: moderateScale(8),
    marginRight: horizontalScale(8),
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(4),
  },
  cartItemPrice: {
    fontSize: moderateScale(16),
    color: Colors.PRICE,
  },
  cartItemActions: {
    flexDirection: 'column',
    width: '40%',
  },
  actionButton: {
    width: horizontalScale(25),
    height: verticalScale(25),
    borderRadius: moderateScale(50),
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(8),
  },
  actionButtonText: {
    color: Colors.WHITE,
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quantityText: {
    fontSize: moderateScale(23),
    marginHorizontal: horizontalScale(8),
    alignSelf: 'center',
    fontWeight: '600',
  },
  deleteButton: {
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteButtonText: {
    color: 'red',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  cartCountView: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginBottom: '15%',
  },
  emptycartView: {
    height: verticalScale(450),
    width: horizontalScale(450),
    alignSelf: 'center',
  },
  footerView: {
    height: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    margin: moderateScale(10),
    fontSize: moderateScale(17),
    fontWeight: '600',
  },
  checkoutView: {
    marginRight: horizontalScale(15),
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(50),
    height: verticalScale(45),
    width: horizontalScale(110),
    alignSelf: 'center',
    borderColor: Colors.BUY,
    borderWidth: 1,
  },
  checkoutText: {
    margin: moderateScale(14),
    fontSize: moderateScale(17),
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default styles;

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
    alignItems: 'center',
    width: '26%',
  },
  actionButton: {
    width: horizontalScale(30),
    height: verticalScale(30),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(8),
  },
  actionButtonText: {
    color: Colors.WHITE,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: moderateScale(16),
    marginHorizontal: horizontalScale(8),
  },
  deleteButton: {
    marginLeft: 'auto',
  },
  deleteButtonText: {
    color: 'red',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  cartCountView: {
    flexDirection: 'row',
    marginRight: '10%',
    marginBottom: '15%',
  },
});

export default styles;

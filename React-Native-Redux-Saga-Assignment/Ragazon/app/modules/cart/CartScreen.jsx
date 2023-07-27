import { Text, View } from 'react-native';
import { CustomButton, LoadingIndicator } from '../../components';
import { STRINGS } from '../../constants';
import styles from './CartScreenStyles';
import { CartList } from './cart-product';
import { useCartScreen } from './hooks';

/*
 * Cart Screen.
 *
 * @return - cart list and total at bottom.
 */

const CartScreen = () => {
  const { loadingStatus, cartList, cartId, cartObject, handleCheckout } =
    useCartScreen();

  switch (loadingStatus) {
    case STRINGS.idle:
    case STRINGS.pending:
      return <LoadingIndicator />;

    case STRINGS.success:
      return (
        <View style={styles.rootView}>
          <CartList
            cartList={cartList}
            cartId={cartId}
          />
          {cartList.length > 0 && (
            <View style={styles.checkOutContainer}>
              <Text style={styles.totalText}>
                Amount to pay: ₹{cartObject?.subtotal?.raw ?? 0}
              </Text>
              <CustomButton
                title={STRINGS.buttonTitles.checkout}
                onPress={handleCheckout}
              />
            </View>
          )}
        </View>
      );

    default:
      break;
  }
};

export default CartScreen;

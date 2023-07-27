import { useContext } from 'react';
import { Alert, Text, View } from 'react-native';
import styles from './CartScreenStyles';
import { CustomButton } from '../../components';
import { CartContext } from '../../contexts';
import { getCartCost } from '../../services';
import { CartList } from './cart_product';
import { STRINGS } from '../../constants';

/*
 * Cart Screen.
 *
 * @return - cart list and total at bottom.
 */

const CartScreen = () => {
    const { cartList } = useContext(CartContext);
    const cartTotal = getCartCost(cartList);

    const handleCheckout = () => {
        Alert.alert('Oops!!', 'This feature is not yet developed!!');
    };

    return (
        <View style={styles.rootView}>
            <CartList />
            {cartList.length > 0 && (
                <View style={styles.checkOutContainer}>
                    <Text style={styles.totalText}>
                        Amount to pay: ${cartTotal}
                    </Text>
                    <CustomButton
                        title={STRINGS.buttonTitles.checkout}
                        onPress={handleCheckout}
                    />
                </View>
            )}
        </View>
    );
};

export default CartScreen;

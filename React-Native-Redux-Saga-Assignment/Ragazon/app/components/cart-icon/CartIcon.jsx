import { ShoppingCart, SignOut } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, moderateScale } from '../../theme';
import styles from './CartIconStyles';

/*
 * Cart Icon component.
 *
 * @param {itemCount} - count of the total items in cart.
 * @param {onPressCart} - action to be performed on cart logo.
 * @param {onSignOut} - action to be performed on sign out logo.
 * @return - row of cart icon and log out logo.
 */

const CartIcon = ({ itemCount, onPressCart, onSignOut }) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onPressCart}>
        <View style={styles.cartIcon}>
          <ShoppingCart
            size={moderateScale(26)}
            color={COLORS.PrimaryColor}
            weight='fill'
          />
          {itemCount > 0 && (
            <View style={styles.badgeStyle}>
              <Text style={styles.textStyle}>
                {itemCount <= 10 ? itemCount : `10+`}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSignOut}
        style={styles.signOut}>
        <SignOut
          size={moderateScale(26)}
          color={COLORS.PrimaryColor}
          weight='fill'
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

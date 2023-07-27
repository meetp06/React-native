import { MinusCircle, PlusCircle, Trash } from 'phosphor-react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, moderateScale } from '../../../../theme';
import styles from './CartItemStyles';
import { useCartItem } from './hooks';

/*
 * Individual Cart item view.
 *
 * @param {item} - current cart product.
 * @param {cartId} - id of the cart.
 * @return - cart item component.
 */

const ItemCart = ({ item, cartId }) => {
  const { handleDecrement, handleDelete, handleIncrement } = useCartItem(
    item,
    cartId
  );

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item?.image.url }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text
            numberOfLines={1}
            style={styles.textStyle}>
            {item?.name}
          </Text>
        </View>
        <Text style={styles.category}>Category</Text>
        <View style={styles.deleteQtyRow}>
          <View style={styles.qtyContainer}>
            <Text style={styles.qtyTextStyle}>QTY : </Text>
            <TouchableOpacity
              disabled={item.quantity === 1}
              onPress={handleDecrement}>
              <MinusCircle
                size={moderateScale(20)}
                color={item.quantity === 1 ? COLORS.grey : COLORS.black}
              />
            </TouchableOpacity>
            <Text style={styles.count}>{item.quantity}</Text>
            <TouchableOpacity onPress={handleIncrement}>
              <PlusCircle size={moderateScale(20)} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleDelete}>
            <Trash
              size={moderateScale(24)}
              color={COLORS.red}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTextStyle}>₹{item?.line_total.raw}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;

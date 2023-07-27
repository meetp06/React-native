import { Image, Text, View } from 'react-native';
import styles from './OrderDetailsItemStyles';

/*
 * Order details Item component.
 *
 * @param {item} - single order item in the current order
 * @return - order details item component
 */

const OrderDetailsItem = ({ item }) => {
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
            {item?.product_name}
          </Text>
        </View>
        <Text style={styles.category}>Category</Text>
        <View style={styles.deleteQtyRow}>
          <View style={styles.qtyContainer}>
            <Text style={styles.qtyTextStyle}>QTY : {item.quantity}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceTextStyle}>₹{item?.line_total.raw}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderDetailsItem;

import { Text, TouchableOpacity, View } from 'react-native';
import { ROUTES } from '../../../constants';
import { getTimeAndDate, navigateWithPush } from '../../../utils';
import styles from './OrderItemStyles';

/*
 * Order Item component.
 *
 * @param {product} - a single order.
 * @return - order item component
 */

const OrderItem = ({ product }) => {
  const navigateOrderDetails = () => {
    navigateWithPush(ROUTES.ORDER_DETAILS, {
      order: product,
    });
  };

  return (
    <TouchableOpacity
      onPress={navigateOrderDetails}
      style={styles.root}>
      <View style={[styles.block, styles.columnBlock]}>
        <Text style={styles.orderId}>
          Order ID: {product?.customer_reference}
        </Text>
      </View>
      <View style={styles.containedBlock}>
        <View style={styles.block}>
          <Text style={styles.columnBlockTextStyle}>
            Date and Time: {getTimeAndDate(product.created)}
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.columnBlockTextStyle}>
            Amount: ₹{product.order?.total?.raw ?? 0}
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.columnBlockTextStyle}>
            Status: {product.status_payment}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

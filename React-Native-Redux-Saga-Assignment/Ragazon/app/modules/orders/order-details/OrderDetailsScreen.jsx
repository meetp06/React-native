import { useRoute } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';
import { applicationStyles } from '../../../theme';
import styles from './OrderDetailsScreenStyles';
import { OrderDetailsItem } from './order-details-item';

/*
 * Order details component.
 *
 * @return - order details component
 */

const OrderDetailsScreen = () => {
  const route = useRoute();

  const orderDetails = route?.params?.order;
  const orderList = orderDetails.order.line_items;

  return (
    <View style={applicationStyles.screen}>
      <FlatList
        contentContainerStyle={applicationStyles.screenGrow}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={orderList}
        renderItem={({ item }) => <OrderDetailsItem item={item} />}
      />
      <View style={styles.checkOutContainer}>
        <Text style={styles.totalText}>
          Amount total Paid: ₹{orderDetails?.order_value?.raw ?? 0}
        </Text>
      </View>
    </View>
  );
};

export default OrderDetailsScreen;

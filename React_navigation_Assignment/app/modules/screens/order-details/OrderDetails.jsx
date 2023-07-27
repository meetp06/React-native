import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import gifs from '../../../assets/gifs';
import styles from './orderDetailsStyles';

// create a component
const OrderDetails = () => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Order Details</Text>
          </View>
          <View style={styles.gifView}>
            <Image style={styles.gif} source={gifs.OrderPlaced} />
            <Text style={styles.orderText}>Order Placed Successfully</Text>
          </View>
          <View style={styles.bodyHeader}>
            <Text style={styles.bodyHeaderText}>Order Summary :</Text>
            <View style={styles.summaryView}>
              <View style={styles.titleView}>
                <Text style={styles.summaryText}>Subtotal</Text>
                <Text style={styles.summaryValue}>$789456</Text>
              </View>
              <View style={styles.titleView}>
                <Text style={styles.summaryText}>Discount</Text>
                <Text style={styles.summaryValue}>$456</Text>
              </View>
              <View style={styles.titleView}>
                <Text style={styles.summaryText}>Shipping Fees</Text>
                <Text style={styles.summaryValue}>$96</Text>
              </View>
              <View style={styles.divider} />

              <View style={styles.titleView}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalValue}>$79456</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;

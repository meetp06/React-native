import {Text, View} from 'react-native';
import styles from './OrderListStyles';

// create a component
const OrderList = () => {
  return (
    <View style={styles.container}>
      <Text>OrderList</Text>
    </View>
  );
};

//make this component available to the app
export default OrderList;

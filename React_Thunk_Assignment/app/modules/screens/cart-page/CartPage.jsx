import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './CartPageStyles';

const CartPage = () => {
  const {newCartData} = useSelector(state => state.cart);
  const renderCartItem = ({item}) => {
    if (newCartData.line_items.length === 0) {
      return <ActivityIndicator />;
    } else {
      return (
        <View style={styles.cartItemContainer}>
          <Image
            resizeMode="contain"
            source={{uri: item.image.url}}
            style={styles.cartItemImage}
          />
          <View style={styles.cartItemDetails}>
            <Text numberOfLines={2} style={styles.cartItemName}>
              {item.name}
            </Text>
            <Text style={styles.cartItemPrice}>{item.price.formatted}</Text>
          </View>
          <View style={styles.cartItemActions}>
            <View style={styles.cartCountView}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => {}}
                disabled={item.quantity === 1}>
                <Text style={styles.actionButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
                <Text style={styles.actionButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.deleteButton} onPress={() => {}}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newCartData.line_items}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
    </View>
  );
};

export default CartPage;

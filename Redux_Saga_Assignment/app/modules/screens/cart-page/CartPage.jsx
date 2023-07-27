import {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from '../../../assets';
import styles from './CartPageStyles';

const CartPage = () => {
  const {newCartData} = useSelector(state => state.cart);
  const [count, setCount] = useState(1);
  const increaseNumber = () => {
    setCount(count => count + 1);
  };
  const decreaseNumber = () => {
    setCount(count => count - 1);
  };
  const deleteProduct = () => {
    //splice
  };
  //item.quantity
  const renderCartItem = ({item}) => {
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
              onPress={() => decreaseNumber()}
              // disabled={item.quantity === 1}
              disabled={count === 1}>
              <Text style={styles.actionButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{count}</Text>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => increaseNumber()}
              disabled={count === 15}>
              <Text style={styles.actionButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteProduct()}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={newCartData.line_items}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.cartList}
          ListEmptyComponent={
            <View>
              <Image style={styles.emptycartView} source={Images.EMPTYCART} />
            </View>
          }
        />
      </View>
      <View style={styles.footerView}>
        <View>
          <Text style={styles.footerText}>Total ammount: ₹547878{}</Text>
        </View>
        <View style={styles.checkoutView}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartPage;

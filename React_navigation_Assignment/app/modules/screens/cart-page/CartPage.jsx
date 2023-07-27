import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {EmptyScreen} from '../../../constants';
import CartContext from '../../../hooks/useCartContext';
import Item from '../cart-list/CartList';
import styles from './CartPageStyles';

const CartScreen = ({totalValue}) => {
  const navigation = useNavigation();
  const [productCart, setProductCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {cartArray, setCartArray} = useContext(CartContext);

  const getApiData = async () => {
    try {
      fetch('https://dummyjson.com/carts/1', {
        method: 'PUT' /* or PATCH */,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          merge: true, // this will include existing products in the cart
          products: [...cartArray],
        }),
      });
      setProductCart(apiData.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const gotoOrderDetailsPage = () => {
    navigation.navigate('PlacedOrder');
  };

  return (
    <View style={styles.root}>
      <View style={{flex: 1}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : cartArray?.length === 0 ? (
          <EmptyScreen />
        ) : (
          <FlatList
            data={cartArray}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Item
                title={item.title}
                discountedPrice={item.discountedPrice}
                discountPercentage={item.discountPercentage}
                price={item.price}
                total={item.total}
                index={item.index}
                productCart={productCart}
                setProductCart={setProductCart}
                totalValue={totalValue}
                cartArray={cartArray}
              />
            )}
            ListHeaderComponent={() => {
              return <Text style={styles.cartDetails}>Cart details...</Text>;
            }}
          />
        )}
      </View>
      {cartArray?.length !== 0 ? (
        <View style={styles.bodyView}>
          <View style={styles.buyNowView}>
            <TouchableOpacity onPress={() => gotoOrderDetailsPage()}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default CartScreen;

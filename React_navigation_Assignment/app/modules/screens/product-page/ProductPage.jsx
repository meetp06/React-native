import {useRoute} from '@react-navigation/native';
import {ShoppingCartSimple} from 'phosphor-react-native';
import {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CartContext from '../../../hooks/useCartContext';
import {moderateScale} from '../../../themes/metrics';
import styles from './ProductPageStyles';

const ShowProduct = () => {
  const [isClick, setIsClick] = useState(true);
  const route = useRoute();

  const {cartArray, setCartArray} = useContext(CartContext);
  const {itemData: item} = route.params;

  const pushIntoCart = () => {
    setCartArray([...cartArray, item]);
  };

  const addIntoCart = () => {
    fetch('https://dummyjson.com/carts/1', {
      method: 'PUT' /* or PATCH */,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        merge: true, // this will include existing products in the cart
        products: [...cartArray],
      }),
    })
      .then(res => res.json())
      .then(res => setCartArray(res.products));
  };

  useEffect(() => {
    addIntoCart();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={{uri: item.images[0]}} style={styles.image} />
          </View>

          <View style={styles.nameView}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.des}>Description :</Text>
            <View>
              <Text numberOfLines={5} style={styles.textDes}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.touchableOpacity}>
          <TouchableOpacity style={styles.cart} onPress={() => pushIntoCart()}>
            <ShoppingCartSimple
              size={moderateScale(26)}
              weight="fill"
              style={styles.icon}
            />
            <Text style={styles.cartText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowProduct;

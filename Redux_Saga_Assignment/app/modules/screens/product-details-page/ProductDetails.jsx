import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTEKEY } from '../../../constants';
import { addItemTOCartIsPending } from '../../../redux/cart/CartSlice';
import styles from './ProductDetailsStyles';

// create a component
const ProductDetailsPage = ({ route }) => {
  const { name, price, image, description } = route.params;
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const gotoCart = () => {
    dispatch(
      addItemTOCartIsPending({
        id: route.params.id,
        cartId: userData.meta.cart.id,
      })
    );
    navigation.push(ROUTEKEY.CART);
  };

  const gotoCheckout = () => {
    navigation.navigate(ROUTEKEY.CHECKOUT);
  };

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.priceView}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            resizeMode='contain'
            source={{ uri: image }}
            style={styles.image}
          />
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => gotoCart()}>
            <Text style={styles.cart}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => gotoCheckout()}>
            <Text style={styles.checkout}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default ProductDetailsPage;

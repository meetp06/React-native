import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ROUTEKEY} from '../../constants';
import styles from './ProductItemStyles';

// create a component
const ProductItem = ({name, price, image, description, id}) => {
  const navigation = useNavigation();
  const gotoProductDetail = () => {
    navigation.push(ROUTEKEY.PRODUCTDETAILS, {
      id,
      name,
      price,
      image,
      description,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => gotoProductDetail()}>
        <View style={styles.imageView}>
          <Image
            source={{uri: image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.productNameView}>
          <Text numberOfLines={1} style={styles.productName}>
            {name}
          </Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default ProductItem;

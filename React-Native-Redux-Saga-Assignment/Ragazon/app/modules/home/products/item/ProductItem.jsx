import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ROUTES } from '../../../../constants';
import { navigateWithPush } from '../../../../utils';
import styles from './ProductItemStyles';

/*
 * Individual product item component.
 *
 * @param {product} - current product.
 * @return - product component.
 */

const ProductItem = ({ product }) => {
  const openProductInfo = () => {
    navigateWithPush(ROUTES.PRODUCT_INFO, {
      product: product,
    });
  };

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={openProductInfo}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image.url }}
          style={styles.image}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.textStyle}>{product.name}</Text>
      </View>
      <Text style={styles.boldTextStyle}>Price: ₹{product.price.raw}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

import { Image, Text, View } from 'react-native';
import styles from './ProductItemStyles';

/*
 * Individual product item component.
 *
 * @param {product} - current product.
 * @return - product component.
 */

const ProductItem = ({ product, selectedCategory }) => {
  const isGood = selectedCategory !== 'All';

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.url ?? 'https://cataas.com/cat' }}
          style={styles.image}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.textStyle}>
          {isGood ? product.id : product.name}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;

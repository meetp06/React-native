import { Image, TouchableOpacity, View, Text } from 'react-native';
import styles from './ProductItemStyles';
import { ROUTES } from '../../../../constants';
import { navigateWithPush } from '../../../../utils';

/*
 * Individual product item component.
 *
 * @param {product} - current product.
 * @return - product component.
 */

const ProductItem = ({ product }) => {
    const openProductInfo = () => {
        navigateWithPush(ROUTES.ProductInfo, {
            product: product,
        });
    };

    return (
        <TouchableOpacity
            style={styles.root}
            onPress={openProductInfo}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.textStyle}>{product.title}</Text>
            </View>
            <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>
                Price: ${product.price}
            </Text>
        </TouchableOpacity>
    );
};

export default ProductItem;

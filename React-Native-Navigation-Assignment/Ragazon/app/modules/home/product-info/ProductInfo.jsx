import { Image, ScrollView, Text, View } from 'react-native';
import styles from './ProductInfoStyles';
import { Checks, StarHalf } from 'phosphor-react-native';
import { CustomButton } from '../../../components';
import { moderateScale } from '../../../theme';
import { useProductInfo } from './hook';
import { STRINGS } from '../../../constants';

/*
 * Product info screen.
 *
 * @return - a screen showing the individual item details.
 */

const ProductInfo = () => {
    const { product, isAlreadyAdded, addInCart } = useProductInfo();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.rootView}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image }}
                />
            </View>
            <Text style={styles.titleStyle}>{product.title}</Text>
            <View style={styles.infoContainer}>
                <View style={styles.categoryRow}>
                    <Text style={styles.category}>{product.category}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>
                            {product.rating.rate}
                            {`  `}
                        </Text>
                        <StarHalf
                            size={moderateScale(23)}
                            weight='fill'
                        />
                    </View>
                </View>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>
                    {product.description}
                </Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>${product.price}</Text>
                    {!isAlreadyAdded ? (
                        <CustomButton
                            title={STRINGS.buttonTitles.addToCart}
                            onPress={addInCart}
                        />
                    ) : (
                        <Checks size={moderateScale(27)} />
                    )}
                </View>
            </View>
        </ScrollView>
    );
};

export default ProductInfo;

import { Checks, StarHalf } from 'phosphor-react-native';
import { Image, ScrollView, Text, View } from 'react-native';
import { CustomButton, LoadingIndicator } from '../../../components';
import { STRINGS } from '../../../constants';
import { applicationStyles, moderateScale } from '../../../theme';
import styles from './ProductInfoStyles';
import { useProductInfo } from './hook';

/*
 * Product info screen.
 *
 * @return - a screen showing the individual item details.
 */

const ProductInfo = () => {
  const {
    product,
    isAlreadyAdded,
    addInCart,
    loading,
    removefromCart,
    handleCheckout,
  } = useProductInfo();

  switch (loading) {
    case STRINGS.idle:
    case STRINGS.pending:
      return <LoadingIndicator textInfo={undefined} />;

    default:
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.rootView}
          contentContainerStyle={applicationStyles.screenGrow}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: product.image.url }}
            />
          </View>
          <Text style={styles.titleStyle}>{product.name}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.categoryRow}>
              <Text style={styles.category}>{product.categories[0].name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{`4.5 `}</Text>
                <StarHalf
                  size={moderateScale(23)}
                  weight='fill'
                />
              </View>
            </View>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>

            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>₹{product.price.raw}</Text>
              {!isAlreadyAdded ? (
                <CustomButton
                  title={STRINGS.buttonTitles.addToCart}
                  onPress={addInCart}
                />
              ) : (
                <View style={styles.buttonRow}>
                  <Checks size={moderateScale(27)} />
                  <CustomButton
                    title={STRINGS.buttonTitles.removeFromCart}
                    onPress={removefromCart}
                  />
                </View>
              )}
            </View>
            <CustomButton
              title={STRINGS.buttonTitles.checkout}
              onPress={handleCheckout}
            />
          </View>
        </ScrollView>
      );
  }
};

export default ProductInfo;

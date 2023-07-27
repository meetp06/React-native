import { FlatList, Text, View } from 'react-native';
import { Images } from '../../../../assets';
import { EmptyComponent, LoadingIndicator } from '../../../../components';
import { STRINGS } from '../../../../constants';
import { applicationStyles } from '../../../../theme';
import { ProductItem } from '../item';
import styles from './ProductListStyles';
import { useProductList } from './hooks';

/*
 * Product list.
 *
 * @param {selectedCategory} - current selected category.
 * @return - list of products
 */

const ProductList = ({ selectedCategory }) => {
  const { loading, data, productData, isSearchEnabled } =
    useProductList(selectedCategory);

  switch (loading) {
    case STRINGS.pending:
    case STRINGS.idle:
      return (
        <View style={applicationStyles.screenGrow}>
          <LoadingIndicator textInfo={undefined} />
        </View>
      );

    case STRINGS.success:
      return (
        <View style={styles.rootView}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              Products: {isSearchEnabled ? data?.length : productData?.length}
            </Text>
          </View>
          <FlatList
            keyExtractor={(item) => item?.id.toString()}
            scrollEnabled={false}
            ListEmptyComponent={
              <EmptyComponent
                message={''}
                src={Images.noResultsFound}
              />
            }
            numColumns={2}
            data={isSearchEnabled ? data : productData}
            renderItem={({ item }) => <ProductItem product={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );

    default:
      break;
  }
};

export default ProductList;

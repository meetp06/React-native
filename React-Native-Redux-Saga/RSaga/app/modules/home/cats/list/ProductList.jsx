import { FlatList, View } from 'react-native';
import { Images } from '../../../../assets';
import {
  CustomButton,
  EmptyComponent,
  LoadingIndicator,
} from '../../../../components';
import { STRINGS } from '../../../../constants';
import { ApplicationStyles } from '../../../../theme';
import applicationStyles from '../../../../theme/ApplicationStyles';
import { ProductItem } from '../item';
import { useProductList } from './hooks';
import { ListFooterComponent } from './list-footer';

/*
 * Product list.
 *
 * @param {selectedCategory} - current selected category.
 * @return - list of products
 */

const ProductList = ({ selectedCategory }) => {
  const { loading, data, handleRetry, isPageLoading, isEndReached } =
    useProductList(selectedCategory);

  switch (loading) {
    case STRINGS.pending:
    case STRINGS.idle:
      return (
        <View style={ApplicationStyles.screenGrow}>
          <LoadingIndicator textInfo={undefined} />
        </View>
      );

    case STRINGS.success:
      return (
        <FlatList
          contentContainerStyle={ApplicationStyles.screenGrow}
          style={applicationStyles.screen}
          keyExtractor={(item) => item?.id.toString()}
          scrollEnabled={true}
          ListEmptyComponent={
            <EmptyComponent
              message={''}
              src={Images.noResultsFound}
            />
          }
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              selectedCategory={selectedCategory}
            />
          )}
          onEndReached={() => {
            data.length !== 1 ? handleRetry() : null;
          }}
          ListFooterComponent={
            <ListFooterComponent
              endReached={isEndReached}
              loading={isPageLoading === STRINGS.pending}
            />
          }
          showsVerticalScrollIndicator={false}
        />
      );

    case STRINGS.failed:
      return (
        <CustomButton
          title={'Tap to retry'}
          onPress={handleRetry}
        />
      );

    default:
      break;
  }
};

export default ProductList;

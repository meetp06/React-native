import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { EmptyComponent } from '../../../../components';
import { Images } from '../../../../assets';
import { CategoryContext, SearchContext } from '../../../../contexts';
import { ProductItem } from '../item';
import styles from './ProductListStyles';
import { filterProducts } from '../../../../utils';

/*
 * Product list.
 *
 * @return - list of products
 */

const ProductList = () => {
    const { selectedCategory } = useContext(CategoryContext);
    const { searchInput } = useContext(SearchContext);
    const filteredProductList = filterProducts(selectedCategory, searchInput);

    return (
        <View style={styles.rootView}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>
                    Products: {filteredProductList.length}
                </Text>
            </View>
            <FlatList
                scrollEnabled={false}
                ListEmptyComponent={
                    <EmptyComponent
                        message={''}
                        src={Images.noResultsFound}
                    />
                }
                data={filteredProductList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ProductItem product={item} />}
            />
        </View>
    );
};

export default ProductList;

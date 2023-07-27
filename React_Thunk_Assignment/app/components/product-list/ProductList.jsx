import {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CategoryList from '../../modules/screens/category-list/CategoryList';
import {ProductAction} from '../../redux/product/ProductSlice';
import {UserAction} from '../../redux/user/UserSlice';
import {ProductItem} from '../product-item';
import styles from './ProductListStyles';

// create a component
const ProductList = ({name, price, categories, image, description, cartId}) => {
  const dispatch = useDispatch();
  const {productData, errorMessage, fetchProduct} = useSelector(
    state => state.product,
  );
  const {categoryData, fetchcategory} = useSelector(state => state.product);

  useEffect(() => {
    dispatch(ProductAction.fetchProduct());
  }, []);

  useEffect(() => {
    dispatch(ProductAction.fetchcategory());
  }, []);

  useEffect(() => {
    dispatch(UserAction.fetchCart(cartId));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {categoryData?.length <= 0 ? <ActivityIndicator /> : null}
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={categoryData}
          renderItem={({item}) => <CategoryList name={item.name} />}
        />
        <View>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
      </View>
      <View>
        {productData?.length <= 0 ? (
          <ActivityIndicator style={styles.indicator} />
        ) : null}
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerStyle}
          numColumns={2}
          data={productData}
          renderItem={({item, index}) => (
            <ProductItem
              id={item.id}
              price={item.price.formatted}
              name={item.name}
              categories={item.categories[0].name}
              image={item.image.url}
              description={item.description}
            />
          )}
        />
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default ProductList;

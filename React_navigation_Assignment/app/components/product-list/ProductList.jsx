import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './ProductListStyles';

const ProductList = ({products, setProducts}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState();

  const getApiData = async () => {
    try {
      const apiData = await axios.get('https://dummyjson.com/products');
      setProductData(apiData.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const navigation = useNavigation();

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={styles.containerStyle}
          numColumns={2}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <View style={styles.flatList}>
                <TouchableOpacity
                  onPress={() =>
                    item
                      ? navigation.navigate('ProductDeatails', {
                          itemData: item,
                        })
                      : null
                  }>
                  <View style={styles.imageContainer}>
                    <View>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={styles.image}
                      />
                    </View>
                    <Text numberOfLines={2} style={styles.name}>
                      {item.title.toUpperCase()}
                    </Text>
                    <Text style={styles.price}>Price: ${item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default ProductList;

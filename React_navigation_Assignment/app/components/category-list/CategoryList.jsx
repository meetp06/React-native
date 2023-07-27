import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './CategoryListStyles';

//* show static CatrgoryList
const CatrgoryList = ({setProducts}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getCategoryData = async () => {
    try {
      const apiData = await axios.get(
        `https://dummyjson.com/products/categories`,
      );
      setCategories(apiData.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const handleCategory = item => {
    if (selectedCategory !== item) {
      fetch('https://dummyjson.com/products/category/' + item)
        .then(res => res.json())
        .then(data => setProducts(data?.products));
    }
  };

  //* Make a flatlist for render categorylist
  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.mainView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.mainFlatlist}
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={styles.flatList}>
                  <TouchableOpacity onPress={() => handleCategory(item)}>
                    <View style={styles.borderStyle}>
                      <Text style={styles.textStyle}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CatrgoryList;

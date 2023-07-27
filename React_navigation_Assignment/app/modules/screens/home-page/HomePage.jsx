import {MagnifyingGlass} from 'phosphor-react-native';
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import insideAppImage from '../../../assets/images/inside-app-image';
import CatrgoryList from '../../../components/category-list/CategoryList';
import ProductList from '../../../components/product-list/ProductList';
import {moderateScale} from '../../../themes/metrics';
import styles from './HomePageStyles';

const HomePage = () => {
  const [userInput, setUserInput] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSelectedCategory = data => {
    setUserInput(data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products/search/?q=' + userInput)
      .then(response => response.json())
      .then(response => {
        setProducts(response.products);
        setIsLoading(false);
      });
  }, [userInput]);

  return (
    <View style={{backgroundColor: '#e9ebf3'}}>
      <SafeAreaView>
        <View>
          <View style={styles.screenStyle}>
            <View style={styles.categoryView}>
              <MagnifyingGlass
                size={moderateScale(20)}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Find category"
                style={styles.textInput}
                value={userInput}
                onChangeText={inputText => setUserInput(inputText)}
              />
            </View>
          </View>
        </View>

        <View style={styles.adImageView}>
          <Image source={insideAppImage.discountImage} style={styles.adImage} />
          <Text numberOfLines={3} style={styles.textStyle}>
            40% off, MacBook Air Laptop M1 chip
          </Text>
        </View>
        {userInput?.length === 0 ? (
          <TouchableOpacity style={styles.categoryStyle}>
            <CatrgoryList
              getSelectedCategory={getSelectedCategory}
              products={products}
              setProducts={setProducts}
            />
          </TouchableOpacity>
        ) : products?.length === 0 ? (
          <View style={styles.searchTextView}>
            <Text style={styles.searchText}>results not found</Text>
          </View>
        ) : (
          <View style={styles.searchTextView}>
            <Text style={styles.searchText}>releated results...</Text>
          </View>
        )}
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <ProductList
              products={products}
              setProducts={setProducts}
              getSelectedCategory={getSelectedCategory}
            />
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};
export default HomePage;

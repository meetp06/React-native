import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  // https://dummyjson.com/products/
  const phoneData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/', {
        method: 'DELETE',
      });
      const json = await response.json();
      setData(json.products);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      phoneData();
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            numColumns={3}
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => {
              return (
                <View>
                  <Image
                    style={{height: 100, width: 100}}
                    source={{uri: item.images[0]}}
                  />
                </View>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomePage;

import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log(request.data, '.......request');
  return request;
});

axios.interceptors.response.use(response => {
  console.log(response, '.......response');
  return response;
});

const AxiosService = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  //   const [isError, setIsError] = useState('');

  //*Used axios inside a hook
  //   useEffect(() => {
  //     setTimeout(() => {
  //       axios
  //         .get('https://dummyjson.com/products')
  //         .then(res => setData(res.data.products))
  //         .catch(error => console.error(error));
  //       setIsLoading(false);
  //     }, 2000);
  //   }, []);

  const getApiData = async () => {
    try {
      const apiData = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(apiData.data);
      setIsLoading(false);
    } catch (error) {
      console.error('invalid link', error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <Text>{item.title.toUpperCase()}</Text>
                  <Text style={{margin: 10}}>{item.body.slice(0, 50)}</Text>
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
export default AxiosService;

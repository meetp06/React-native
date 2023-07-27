import {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserIsPending} from '../../redux/UserSlice';
import styles from './HomeStyles';

// create a component
const Home = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserIsPending());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={user}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Image source={{uri: item.url}} style={styles.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

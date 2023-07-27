import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UserActions} from '../../redux/user-slice/UserSlice';
import styles from './HomeStyles';

// create a component
const HomePage = () => {
  const dispatch = useDispatch();
  const {userData, errorMessage, fetchUserFromData} = useSelector(
    state => state.user,
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(UserActions.fetchUserFromData())}>
        <Text style={styles.text}>GetData</Text>
      </TouchableOpacity>
      <View>
        <Text>{errorMessage}</Text>
      </View>
      <View>
        {fetchUserFromData && <ActivityIndicator />}
        <FlatList
          data={userData}
          renderItem={({item}) => (
            <View>
              <Text numberOfLines={1}>{item.name}</Text>
              <View style={styles.divider} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default HomePage;

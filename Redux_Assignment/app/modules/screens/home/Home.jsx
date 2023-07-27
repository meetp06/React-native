import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UserList} from '../../../components';
import {addPage, listOfUser} from '../../../redux/actions/Actions';

// create a component
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const page = useSelector(state => state.page.page);
  const user = useSelector(state => state.userList.userList);
  const dispatch = useDispatch();
  const getUser = () => {
    if (page >= 3) return;
    try {
      setIsLoading(true);
      const response = axios
        .get(`https://reqres.in/api/users?page=${page}`)
        .then(response => {
          dispatch(listOfUser(response.data.data));
          setIsLoading(false);
        });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [page]);

  const keyExtractor = useCallback(item => Math.random(item));

  const RenderLoader = () => {
    return isLoading ? (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="purple" animating={true} />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    dispatch(addPage());
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={user}
        renderItem={({item}) => (
          <UserList
            first_name={item.first_name}
            last_name={item.last_name}
            avatar={item.avatar}
            email={item.email}
          />
        )}
        keyExtractor={keyExtractor}
        ListFooterComponent={RenderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

//make this component available to the app
export default HomePage;

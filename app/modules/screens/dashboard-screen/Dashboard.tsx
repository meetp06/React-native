import { Bird, MagnifyingGlass } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import UserListComponent from '../../../components/user-list-page/UserList';
import { useAppDispatch, useAppSelector } from '../../../constants/ConstHooks';
import { fetchUserIsPending } from '../../../redux/user/UserSlice';
import { moderateScale } from '../../../theme';
import ApplicationStyle from '../../../theme/ApplicationStyle';
import Color from '../../../theme/Colors';
import styles from './DashboardStyles';

const Dashboard = () => {
  const { userListData, pageNumber, isUserFetch } = useAppSelector(
    state => state.user,
  );

  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState(userListData);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchUserIsPending(page));
  }, [page]);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filteredUsers = userListData.filter(user => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      return fullName.includes(text.toLowerCase());
    });
    setFilteredData(filteredUsers);
  };

  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={ApplicationStyle.screen} behavior="height">
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <MagnifyingGlass
              size={moderateScale(22)}
              color={Color.BlueA}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearch}
            />
          </View>
          <FlatList
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={filteredData}
            renderItem={({ item }) => (
              <UserListComponent
                first_name={item.first_name}
                last_name={item.last_name}
                email={item.email}
                avatar={item.avatar}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
            initialNumToRender={6}
            ListEmptyComponent={
              <View style={styles.emptyComponent}>
                <Bird size={moderateScale(82)} />
                <Text style={styles.emptyComponentText}>No user found...</Text>
              </View>
            }
          />
          <RenderLoader isUserFetch={isUserFetch} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const RenderLoader = ({ isUserFetch }: { isUserFetch: boolean }) => {
  return (
    isUserFetch && (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator
          size="large"
          color={Color.BackgroundColor}
          animating={isUserFetch}
        />
      </View>
    )
  );
};

export default Dashboard;

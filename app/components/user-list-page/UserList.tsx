import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RouteNames} from '../../constants';
import {navigateWithParam} from '../../utils';
import styles from './UserListStyles';

export interface UserType {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserListComponent = ({
  email,
  first_name,
  last_name,
  avatar,
}: UserType) => {
  const gotoUserDetails = () => {
    navigateWithParam(RouteNames.UserDetails, {
      userDetail: {email, first_name, last_name, avatar},
    });
  };
  return (
    <TouchableOpacity onPress={() => gotoUserDetails()}>
      <View style={styles.itemContainer}>
        <Image source={{uri: avatar}} style={styles.avatar} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserListComponent;

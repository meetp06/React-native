import {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './UserListStyles';

const UserList = ({email, first_name, last_name, avatar}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.root}>
          <View>
            <Image style={styles.image} source={{uri: avatar}} />
          </View>
          <View style={styles.userDetail}>
            <View style={styles.username}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <View>
              <Text style={styles.email}>{email}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(UserList);

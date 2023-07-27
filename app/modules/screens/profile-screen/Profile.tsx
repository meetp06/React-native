import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './ProfileStyles';

const Profile = () => {
  const route = useRoute<RouteProp<ParamListBase>>();

  const {userDetail}: any = route.params;

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.container}>
        <Image source={{uri: userDetail.avatar}} style={styles.image} />
        <View style={styles.nameView}>
          <Text style={styles.name}>{userDetail.first_name}</Text>
          <Text style={styles.name}>{userDetail.last_name}</Text>
        </View>
        <Text style={styles.email}>{userDetail.email}</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

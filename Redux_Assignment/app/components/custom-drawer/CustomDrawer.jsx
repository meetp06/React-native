import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import styles from './CustomDrawerStyles';

// create a component
const CustomDrawer = props => {
  const navigation = useNavigation();
  const gotoLoginScreen = () => {
    navigation.navigate('Log In');
  };
  return (
    <View style={styles.root}>
      <DrawerContentScrollView
        {...props}
        style={styles.backColor}
        contentContainerStyle={styles.scrollView}>
        <Image style={styles.user} source={images.User} />

        <View style={styles.userDetailView}>
          <Text style={styles.detailsText}>Ema Watson{}</Text>
          <Text style={styles.emailText}>Ema1234@gmail.com{}</Text>
        </View>
        <View style={styles.listView}></View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => gotoLoginScreen()}>
          <Text style={styles.footerTextColor}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default CustomDrawer;

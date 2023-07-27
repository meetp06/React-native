import {Image, Text, View} from 'react-native';
import insideAppImage from '../../assets/images/inside-app-image';
import styles from './EmptyScreenStyle';

const EmptyScreen = () => {
  return (
    <View style={styles.imageView}>
      <Image source={insideAppImage.emptyList} style={styles.image} />
      <Text style={styles.text}>Cart is Empty...</Text>
    </View>
  );
};

export default EmptyScreen;

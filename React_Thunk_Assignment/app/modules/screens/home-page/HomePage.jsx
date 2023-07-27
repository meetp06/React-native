import {Text, View} from 'react-native';
import styles from './HomePageStyles';

// create a component
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
    </View>
  );
};

//make this component available to the app
export default HomePage;

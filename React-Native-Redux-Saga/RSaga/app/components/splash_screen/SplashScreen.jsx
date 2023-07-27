import { Text, View } from 'react-native';
import styles from './SplashScreenStyles';

/*
 * Splash screen that will be shown on loading.
 *
 * @param none.
 * @return - splash screen
 */

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RSaga</Text>
    </View>
  );
};

export default SplashScreen;
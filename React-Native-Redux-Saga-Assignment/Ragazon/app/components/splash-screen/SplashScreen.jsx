import { Text, View } from 'react-native';
import { STRINGS } from '../../constants';
import styles from './SplashScreenStyles';

/*
 * Splash screen that will be shown on loading.
 *
 * @return - splash screen
 */

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{STRINGS.appName}</Text>
    </View>
  );
};

export default SplashScreen;

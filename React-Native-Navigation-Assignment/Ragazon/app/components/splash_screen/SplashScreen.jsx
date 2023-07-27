import { View, Text } from 'react-native';
import styles from './SplashScreenStyles';

/*
 * Splash screen that will be shown on loading.
 *
 * @return - splash screen
 */

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ragazon</Text>
        </View>
    );
};

export default SplashScreen;

import {SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import StackNavigation from './navigation/Stack';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigation />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;

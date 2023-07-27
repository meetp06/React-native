import {SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import StackNavigation from './navigations/stack-navigation/StackNavigation';
import store from './redux/store';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
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

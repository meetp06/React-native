import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Home from './modules/home/Home';
import store from './redux/store';

// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Home />
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

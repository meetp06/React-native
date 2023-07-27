import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { HomeScreen } from './modules';
import { store } from './redux';
import { ApplicationStyles } from './theme';

const App = () => {
  return (
    <SafeAreaView style={ApplicationStyles.screen}>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

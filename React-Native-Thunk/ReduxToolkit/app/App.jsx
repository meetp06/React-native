import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HomePage } from './modules';
import { persistor, store } from './redux';
import { ApplicationStyles } from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={ApplicationStyles.screen}>
          <HomePage />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

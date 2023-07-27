import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootStack } from './navigation';
import { persistor, store } from './redux/store';
import ApplicationStyle from './theme/ApplicationStyle';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={ApplicationStyle.screen}>
          <RootStack />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
export default App;

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SplashScreen } from './components';
import { RootStack } from './navigations';
import { persistor, store } from './redux';
import { applicationStyles } from './theme';
import { navigationRef } from './utils';

/*
 * Main App component.
 *
 * @return - main app component
 */

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<SplashScreen />}>
        <NavigationContainer ref={navigationRef}>
          <SafeAreaView style={applicationStyles.screen}>
            <RootStack />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

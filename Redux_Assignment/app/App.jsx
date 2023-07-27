import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import StackNavigation from './navigations/stack/Stack';
import store, {persistor} from './redux/store';

// create a component
const RootApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StackNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

//make this component available to the app
export default RootApp;

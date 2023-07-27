import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Home} from './modules';
import store, {persistor} from './redux/store/store';

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

//make this component available to the app
export default App;

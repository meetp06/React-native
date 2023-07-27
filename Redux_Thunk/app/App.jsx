import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {Home} from './modules';
import {store} from './redux/store';

// create a component
const MyComponent = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Home />
      </Provider>
    </SafeAreaView>
  );
};

//make this component available to the app
export default MyComponent;

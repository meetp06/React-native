import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import CartContext from './hooks/useCartContext';
import CartHook from './hooks/useCartHook';
import MainStack from './navigations/stack-navigation/Stack';

const App = () => {
  const [cartArray, setCartArray] = CartHook();
  return (
    <CartContext.Provider value={{cartArray, setCartArray}}>
      <View style={styles.root}>
        <MainStack />
      </View>
    </CartContext.Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default App;

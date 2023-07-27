import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {House, List, ShoppingCart} from 'phosphor-react-native';
import {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import RoutesKeys from '../../constants/RoutesKeys';
import CartContext from '../../hooks/useCartContext';
import CartScreen from '../../modules/screens/cart-page/CartPage';
import HomePage from '../../modules/screens/home-page/HomePage';
import {moderateScale} from '../../themes/metrics';

const Tab = createBottomTabNavigator();

const NavigateScreen = () => {
  const {cartArray, setCartArray} = useContext(CartContext);
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={RoutesKeys.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <House size={moderateScale(28)} weight="fill" />
                ) : (
                  <House size={moderateScale(28)} />
                )}
              </View>
            );
          },
          headerShown: true,

          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  return navigation.dispatch(DrawerActions.openDrawer());
                }}>
                <List size={moderateScale(22)} style={{marginLeft: 10}} />
              </TouchableOpacity>
            );
          },
          tabBarShowLabel: false,
          headerTitleStyle: {fontSize: moderateScale(22)},
        }}
      />
      <Tab.Screen
        name={RoutesKeys.Cart}
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <ShoppingCart size={moderateScale(28)} weight="fill" />
                ) : (
                  <ShoppingCart size={moderateScale(28)} />
                )}
              </View>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  return navigation.dispatch(DrawerActions.openDrawer());
                }}>
                <List size={moderateScale(22)} style={{marginLeft: 10}} />
              </TouchableOpacity>
            );
          },
          headerShown: true,
          tabBarShowLabel: false,
          headerTitleStyle: {fontSize: moderateScale(22)},
          tabBarBadge: cartArray.length,
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <View>
      <HomePage />
    </View>
  );
};
const Cart = () => {
  return (
    <View style={{flex: 1}}>
      <CartScreen />
    </View>
  );
};

export default NavigateScreen;

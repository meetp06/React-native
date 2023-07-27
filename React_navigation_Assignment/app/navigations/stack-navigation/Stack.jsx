import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoutesKeys from '../../constants/RoutesKeys';
import {LoginScreen, OrderDetails, SignupPage} from '../../modules';
import ShowProduct from '../../modules/screens/product-page/ProductPage';
import {moderateScale} from '../../themes/metrics';
import DrawerNavigate from '../drawer-navigation/Drawer';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutesKeys.Login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RoutesKeys.SignUp}
          component={SignupPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RoutesKeys.MainStack}
          component={DrawerNavigate}
          options={{
            headerShown: false,
            headerTitle: 'back',
          }}
        />
        <Stack.Screen
          name={RoutesKeys.ProductDeatails}
          component={ShowProduct}
          options={{headerTitleStyle: {fontSize: moderateScale(20)}}}
        />
        <Stack.Screen
          name={RoutesKeys.PlacedOrder}
          component={OrderDetails}
          options={{headerTitleStyle: {fontSize: moderateScale(20)}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

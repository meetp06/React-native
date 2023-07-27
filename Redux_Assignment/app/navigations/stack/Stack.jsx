import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../constants';
import {SignUp} from '../../modules';
import LoginPage from '../../modules/auth/log-in/LogIn';
import {Drawer} from '../drawer';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.LogIn}
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={Routes.SignUp}
          component={SignUp}
        />
        <Stack.Screen
          name={Routes.Home}
          component={Drawer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

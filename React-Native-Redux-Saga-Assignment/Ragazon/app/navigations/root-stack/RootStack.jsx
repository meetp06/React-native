import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../constants';
import { LoginScreen, RegisterScreen } from '../../modules';
import { HomeTab } from '../home-tab';

/*
 * Root stack Navigation.
 *
 * @return - stack navigation component
 */

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isLoggedIn ? ROUTES.HOME_TAB : ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={ROUTES.HOME_TAB}
        component={HomeTab}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;

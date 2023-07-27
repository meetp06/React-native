import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserDetailsContext } from '../../contexts';
import { LoginScreen } from '../../modules';
import { Drawer } from '../drawer';
import { ROUTES } from '../../constants';

/*
 * Root stack Navigation.
 *
 .
 * @return - stack navigation component
 */

const Stack = createStackNavigator();

const RootStack = () => {
    const { userDetails } = useContext(UserDetailsContext);

    const initialRouteName = userDetails?.isLoggedIn
        ? ROUTES.Drawer
        : ROUTES.Login;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={initialRouteName}>
            <Stack.Screen
                name={ROUTES.Drawer}
                component={Drawer}
            />
            <Stack.Screen
                name={ROUTES.Login}
                component={LoginScreen}
            />
        </Stack.Navigator>
    );
};

export default RootStack;

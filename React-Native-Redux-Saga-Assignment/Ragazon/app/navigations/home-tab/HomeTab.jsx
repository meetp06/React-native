import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, ListChecks } from 'phosphor-react-native';
import { ROUTES } from '../../constants';
import { COLORS, applicationStyles, moderateScale } from '../../theme';
import { HomeStack } from '../home-stack';
import { OrderStack } from '../order-stack';

/*
 * Home tab Navigation.
 *
 * @return - Tab navigation component
 */

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: applicationStyles.screenTitleStyle,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <House
                size={moderateScale(32)}
                weight='fill'
                color={COLORS.PrimaryColor}
              />
            ) : (
              <House size={moderateScale(26)} />
            ),
        }}
        name={ROUTES.HOME_STACK}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          headerShown: false,

          tabBarIcon: ({ focused }) =>
            focused ? (
              <ListChecks
                size={moderateScale(32)}
                weight='fill'
                color={COLORS.PrimaryColor}
              />
            ) : (
              <ListChecks size={moderateScale(26)} />
            ),
        }}
        name={ROUTES.ORDER_STACK}
        component={OrderStack}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;

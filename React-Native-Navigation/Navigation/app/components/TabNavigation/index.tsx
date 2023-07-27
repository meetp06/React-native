import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomImage from '../../constants/customImage';
import Strings from '../../constants/strings';
import FirstDrawerScreen from '../DrawerScreens';
import SecondDrawerScreen from './secondScreen';
import ThirdDrawerScreen from './thirdScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            // sceneContainerStyle={{ backgroundColor: 'red' }}
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                // tabBarBadge: 'S',
                tabBarActiveTintColor: 'red',
                tabBarIcon: () => <CustomImage src={Strings.homeIcon} />,
                unmountOnBlur: false,
                // lazy: false,
            }}>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                }}
                name='Home'
                component={FirstDrawerScreen}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Call',
                }}
                name='Contact'
                component={SecondDrawerScreen}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Message',
                }}
                name='Message'
                component={ThirdDrawerScreen}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;

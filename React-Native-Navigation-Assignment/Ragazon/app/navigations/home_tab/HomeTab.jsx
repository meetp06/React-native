import { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, List, ShoppingCart } from 'phosphor-react-native';
import { CartContext } from '../../contexts';
import { CartScreen } from '../../modules';
import { HomeStack } from '../home-stack';
import { ROUTES } from '../../constants';
import { COLORS, moderateScale } from '../../theme';
import { applicationStyles } from '../../theme';
import { NormalHeader } from '../../components';

/*
 * Home tab Navigation.
 *
 * @return - Tab navigation component
 */

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    const { cartList } = useContext(CartContext);

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
                name={ROUTES.HomeStack}
                component={HomeStack}
            />
            <Tab.Screen
                options={{
                    header: ({ navigation }) => (
                        <NormalHeader
                            leftComponent={
                                <List
                                    size={moderateScale(24)}
                                    weight='bold'
                                    color={COLORS.PrimaryColor}
                                />
                            }
                            leftComponentOnPress={() => {
                                navigation.openDrawer();
                            }}
                            title={'Cart'}
                        />
                    ),
                    tabBarBadge: cartList.length,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <ShoppingCart
                                size={moderateScale(32)}
                                weight='fill'
                                color={COLORS.PrimaryColor}
                            />
                        ) : (
                            <ShoppingCart size={moderateScale(26)} />
                        ),
                }}
                name={ROUTES.Cart}
                component={CartScreen}
            />
        </Tab.Navigator>
    );
};

export default HomeTab;

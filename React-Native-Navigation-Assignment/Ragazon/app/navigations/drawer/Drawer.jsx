import { createDrawerNavigator } from '@react-navigation/drawer';
import { List } from 'phosphor-react-native';
import { AccountScreen, ProfileScreen } from '../../modules';
import { ROUTES } from '../../constants';
import { COLORS, moderateScale } from '../../theme';
import { HomeTab } from '../home_tab';
import { CustomDrawerItem, NormalHeader } from '../../components';

/*
 * Drawer Navigation.
 *
 * @return - Drawer navigation component
 */

const Drawers = createDrawerNavigator();

const Drawer = () => {
    return (
        <Drawers.Navigator
            drawerContent={CustomDrawerItem}
            screenOptions={{
                drawerStyle: {
                    width: '70%',
                },
            }}>
            <Drawers.Screen
                options={{
                    headerShown: false,
                }}
                name={ROUTES.HomeTab}
                component={HomeTab}
            />
            <Drawers.Screen
                options={{
                    header: ({ navigation }) => (
                        <NormalHeader
                            title={'Profile'}
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
                        />
                    ),
                }}
                name={ROUTES.Profile}
                component={ProfileScreen}
            />
            <Drawers.Screen
                options={{
                    header: ({ navigation }) => (
                        <NormalHeader
                            title={'Account'}
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
                        />
                    ),
                }}
                name={ROUTES.Account}
                component={AccountScreen}
            />
        </Drawers.Navigator>
    );
};

export default Drawer;

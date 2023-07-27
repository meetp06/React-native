import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {House, List, SignOut, User} from 'phosphor-react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import RoutesKeys from '../../constants/RoutesKeys';
import {LoginScreen} from '../../modules';
import AccountPage from '../../modules/screens/account-page/AccountPage';
import {moderateScale} from '../../themes/metrics';
import NavigateScreen from '../tab-navigation/Tab';

const Drawer = createDrawerNavigator();

const DrawerNavigate = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={RoutesKeys.HomePageHeader}
        component={NavigateScreen}
        options={{
          drawerLabelStyle: {fontSize: moderateScale(15)},
          headerShown: false,
          drawerIcon: ({focused}) => {
            return (
              <View>
                <Text>
                  {focused ? (
                    <House size={moderateScale(22)} weight="fill" />
                  ) : (
                    <House size={moderateScale(22)} />
                  )}
                </Text>
              </View>
            );
          },
        }}
      />
      <Drawer.Screen
        name={RoutesKeys.Account}
        component={Account}
        options={{
          drawerLabelStyle: {fontSize: moderateScale(15)},
          headerTitleStyle: {fontSize: moderateScale(22)},
          drawerIcon: ({focused}) => {
            return (
              <View>
                <Text>
                  {focused ? (
                    <User size={moderateScale(22)} weight="fill" />
                  ) : (
                    <User size={moderateScale(22)} />
                  )}
                </Text>
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
        }}
      />
      <Drawer.Screen
        name={RoutesKeys.LogOut}
        component={LoginScreen}
        options={{
          drawerLabelStyle: {fontSize: moderateScale(15)},
          headerShown: false,
          drawerIcon: () => {
            return (
              <View>
                <Text>
                  <SignOut size={moderateScale(22)} color="red" />
                </Text>
              </View>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const Account = () => {
  return (
    <View>
      <AccountPage />
    </View>
  );
};

// const LogOut = () => {
//   navigation.dispatch(StackActions.reset('Login'));
// };

export default DrawerNavigate;

import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  Binoculars,
  CirclesFour,
  Gear,
  House,
  UserCircle,
} from 'phosphor-react-native';
import {Text, TouchableOpacity} from 'react-native';
import {CustomDrawer} from '../../components';
import {RouteNames, Strings} from '../../constants';
import {Setting, UserProfile} from '../../modules';
import {moderateScale} from '../../theme';
import ApplicationStyle from '../../theme/ApplicationStyle';
import Color from '../../theme/Colors';
import {NavigationProps} from '../stack-navigation/Stack';
import MyTabs from '../tab-navigation/Tab';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  const navigation = useNavigation<NavigationProps>();

  const gotoNotificationPage = () => {
    navigation.navigate(RouteNames.NotificationPage);
  };

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={RouteNames.Dashboard}
        component={MyTabs}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => <House size={moderateScale(25)} />,
          drawerLabelStyle: ApplicationStyle.drawerLabelStyle,
          headerTitle: () => (
            <Text style={ApplicationStyle.headerName}>
              {Strings.InsideAppStrings.AppName}
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <CirclesFour
                size={moderateScale(25)}
                color={Color.SecondaryColorE}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => gotoNotificationPage()}>
              <Binoculars
                size={moderateScale(25)}
                color={Color.Black}
                style={ApplicationStyle.iconPositionRightSide}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteNames.DrawerProfile}
        component={UserProfile}
        options={{
          headerTitle: 'Profile',
          drawerLabel: 'Profile',
          drawerIcon: () => <UserCircle size={moderateScale(25)} />,
          drawerLabelStyle: ApplicationStyle.drawerLabelStyle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <CirclesFour
                size={moderateScale(25)}
                color={Color.SecondaryColorE}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteNames.DrawerSettings}
        component={Setting}
        options={{
          headerTitle: 'Setting',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <CirclesFour
                size={moderateScale(25)}
                color={Color.SecondaryColorE}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          ),
          drawerLabel: 'Setting',
          drawerLabelStyle: ApplicationStyle.drawerLabelStyle,
          drawerIcon: () => <Gear size={moderateScale(25)} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

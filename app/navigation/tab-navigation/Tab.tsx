import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  House,
  MonitorPlay,
  UserCircle,
  UserCirclePlus,
} from 'phosphor-react-native';
import {RouteNames} from '../../constants';
import {Dashboard} from '../../modules/screens';
import AddUser from '../../modules/screens/new-user/AddUser';
import UserProfile from '../../modules/screens/user-profile/UserProfile';
import VideoPlayer from '../../modules/screens/video-screen/VideoPlayer';
import {moderateScale} from '../../theme';

const Tab = createMaterialBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={RouteNames.Home}
        component={Dashboard}
        options={{tabBarIcon: () => <House size={moderateScale(25)} />}}
      />
      <Tab.Screen
        name={RouteNames.Create}
        component={AddUser}
        options={{
          tabBarIcon: () => <UserCirclePlus size={moderateScale(25)} />,
          tabBarLabel: 'Add user',
        }}
      />
      <Tab.Screen
        name={RouteNames.Video}
        component={VideoPlayer}
        options={{tabBarIcon: () => <MonitorPlay size={moderateScale(25)} />}}
      />
      <Tab.Screen
        name={RouteNames.TabProfile}
        component={UserProfile}
        options={{
          tabBarIcon: () => <UserCircle size={moderateScale(25)} />,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;

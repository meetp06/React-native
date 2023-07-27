import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {List, UserCirclePlus} from 'phosphor-react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {CustomDrawer} from '../../components';
import CreateUserModal from '../../modals/create-user-modal/UserModal';
import {LogIn} from '../../modules';
import HomePage from '../../modules/screens/home/Home';
import {moderateScale} from '../../theme/matrix';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomePage}
        options={{
          drawerLabelStyle: {fontSize: moderateScale(15)},
          headerTitle: 'Home',
          headerShown: true,
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
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => {
                  setOpenModal(true);
                }}>
                {openModal ? (
                  <CreateUserModal
                    setModalVisible={setOpenModal}
                    modalVisible={openModal}
                  />
                ) : null}
                <UserCirclePlus
                  size={moderateScale(24)}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogIn}
        options={{
          drawerLabelStyle: {fontSize: moderateScale(15)},
          headerTitle: 'Home',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

import 'react-native-gesture-handler';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
    createDrawerNavigator,
} from '@react-navigation/drawer';

import { TouchableOpacity } from 'react-native';
import CustomImage from '../../constants/customImage';
import Strings from '../../constants/strings';

import TabNavigation from '../TabNavigation';
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label='Home'
                onPress={() => props.navigation.navigate('FirstDrawerScreen')}
            />
            <DrawerItem
                label='Contact'
                onPress={() => props.navigation.navigate('SecondDrawerScreen')}
            />
            <DrawerItem
                label='Message'
                onPress={() => props.navigation.navigate('ThirdDrawerScreen')}
            />
        </DrawerContentScrollView>
    );
}

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            backBehavior='history'
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <CustomImage src={Strings.menuIcon} />
                    </TouchableOpacity>
                ),
                drawerIcon: () => <CustomImage src={Strings.menuIcon} />,
            })}
            defaultStatus='closed'>
            <Drawer.Screen
                name='Home'
                component={TabNavigation}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

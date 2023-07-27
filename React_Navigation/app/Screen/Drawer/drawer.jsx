import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import styles from './styles';
import BottomNavigation from '../BottomTab/bottomTab';
import HomePage from '../Stack/stack';
import CustomDrawer from './customDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    // const focusHook = useIsFocused();
    return (
        <NavigationContainer
        // screenOptions={{
        //     drawerIcon: () => (
        //         <Image
        //             source={require('../../assets/image/bottomTabIcon/menu.png')}
        //             style={{ height: 15, width: 15 }}
        //         />
        //     ),
        // }}
        >
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    // headerShown: false,
                    drawerIcon: () => (
                        <Image
                            source={require('../../assets/image/bottomTabIcon/menu.png')}
                            style={{ height: 15, width: 15 }}
                        />
                    ),
                }}
                backBehavior='history'>
                <Drawer.Screen
                    name='Profile'
                    component={Profile}
                />
                <Drawer.Screen
                    name='StackScreen'
                    component={BottomNavigation}
                />
                <Drawer.Screen
                    name='DarkScreen'
                    component={HomePage}
                />
                <Drawer.Screen
                    name='Music'
                    component={Music}
                />
                <Drawer.Screen
                    name='About'
                    component={About}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const Profile = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.MainPage}>
                <View>
                    <Text>Profile Page</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const Music = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.MainPage}>
                <View>
                    <Text>Music Page</Text>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('HomePage')}>
                        <Text>Goto Drawer</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </SafeAreaView>
    );
};
const About = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.MainPage}>
                <View>
                    <Text>About Page</Text>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('HomePage')}>
                        <Text>Goto Drawer</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DrawerNavigation;

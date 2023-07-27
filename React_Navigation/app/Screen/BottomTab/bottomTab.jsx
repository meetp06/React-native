import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackFile from './stackFile';
import images from '../../assets/image';

const Tab = createBottomTabNavigator();

// create a component
const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#bc0a1d',
                // tabBarActiveBackgroundColor: '#b2e2f8',
                tabBarBadge: 2,
                tabBarAllowFontScaling: true,
                tabBarBadgeStyle: {
                    backgroundColor: '#92c8f4',
                },
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    backgroundColor: '#e9ebfd',
                    borderRadius: 40,
                    position: 'absolute',
                },
            }}>
            <Tab.Screen
                name='Home'
                component={StackFile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={
                                    focused ? images.homeIcon : images.extraIcon
                                }
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='Setting'
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={images.settingIcon}
                                style={{
                                    height: 27,
                                    width: 27,
                                    tintColor: focused ? '#184598' : 'black',
                                }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={images.profileIcon}
                                style={{
                                    height: 29,
                                    width: 29,
                                    tintColor: focused ? '#184598' : 'black',
                                }}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

const Setting = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Setting</Text>
            </View>
        </SafeAreaView>
    );
};
const Profile = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BottomNavigation;

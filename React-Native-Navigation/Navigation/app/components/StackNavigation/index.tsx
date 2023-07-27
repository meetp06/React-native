import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';
import ThirdScreen from '../ThirdScreen';
import StackNavigation2 from '../StackNavigation#2';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='FirstScreen'>
            <Stack.Screen
                options={({ route }) => ({
                    navigationBarColor: 'red',
                    statusBarColor: 'green',
                    title: route.params?.title ?? 'ShadowTitle',
                    headerTitle: route.params?.titleGiven ?? 'Shadow',
                    headerBackVisible: true,
                    headerTransparent: false,
                    animation: 'flip',
                })}
                name='FirstScreen'
                component={FirstScreen}
                initialParams={{ title: 'Hero2' }}
            />
            <Stack.Screen
                options={{
                    navigationBarColor: 'red',
                    headerTintColor: 'blue',
                    statusBarColor: 'green',
                    headerBackTitleVisible: false,
                    animation: 'fade_from_bottom',
                }}
                name='SecondNested'
                component={StackNavigation2}
                initialParams={{ title: 'Hero' }}
            />
            <Stack.Screen
                name='ThirdScreen'
                component={ThirdScreen}
                options={({ route }) => ({
                    title: route.params?.titleGiven ?? '#3rd',
                })}
                initialParams={{ title: 'Hero' }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;

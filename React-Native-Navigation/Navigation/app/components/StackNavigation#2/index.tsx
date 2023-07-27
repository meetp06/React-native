import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';
import ThirdScreen from '../ThirdScreen';

const Stack = createNativeStackNavigator();

const StackNavigation2 = () => {
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
                name='FirstScreen2'
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
                name='SecondScreen2'
                component={SecondScreen}
                initialParams={{ title: 'Hero' }}
            />
            <Stack.Screen
                name='ThirdScreen2'
                component={ThirdScreen}
                options={({ route }) => ({
                    title: route.params?.titleGiven ?? '#3rd',
                })}
                initialParams={{ title: 'Hero' }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation2;

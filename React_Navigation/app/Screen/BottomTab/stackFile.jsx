import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, SafeAreaView, Text, View } from 'react-native';

const Stack = createStackNavigator();
const StackFile = () => {
    return (
        <Stack.Navigator key={1}>
            <Stack.Screen
                name='back'
                component={MainPage}
                options={{
                    headerTitle: 'MainPage',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='SecondPage'
                component={SecondPage}
                options={{ headerBackTitle: 'back' }}
            />
        </Stack.Navigator>
    );
};

const MainPage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text>Hello</Text>
                </View>
                <View>
                    <Button
                        title='NextPage'
                        onPress={() => navigation.navigate('SecondPage')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
const SecondPage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text>Hello all</Text>
                <View>
                    <Button
                        title='go home'
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default StackFile;

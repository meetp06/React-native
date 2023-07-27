import {
    Alert,
    Button,
    ImageBackground,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import String from '../../Strings/string';
import { StackActions } from '@react-navigation/native';
import SecondPage from './secondPage';

const Stack = createNativeStackNavigator();

const HomePage = () => {
    return (
        <Stack.Navigator initialRouteName='HomePage'>
            <Stack.Screen
                name='FifthPage'
                component={FifthPage}
                options={{
                    headerBackVisible: false,
                }}
            />

            <Stack.Screen
                name='HomePage'
                component={Home}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                }}
            />

            <Stack.Screen
                name='SecondPage'
                component={SecondPage}
                options={{
                    headerTransparent: true,
                    headerBackButtonMenuEnabled: false,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                }}
            />

            <Stack.Screen
                name='ThirdPage'
                component={ThirdPage}
                options={{
                    title: 'Meet',
                }}
            />

            <Stack.Screen
                name='FourthPage'
                component={FourthPage}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.pageDesign}>
            <SafeAreaView>
                <View>
                    <ImageBackground
                        source={require('../../assets/image/homePagePhotos/apple.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Home Screen</Text>
                    <Button
                        title='Goto Second Page'
                        onPress={() =>
                            navigation.navigate('SecondPage', {
                                title: 'kuch bhi',
                            })
                        }
                    />
                    <Button
                        title='Tap Here'
                        onPress={() =>
                            Alert.alert('Hello World', String.message, [
                                {
                                    text: 'ok',
                                    style: 'destructive',
                                },
                            ])
                        }
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

const ThirdPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.pageDesign}>
            <SafeAreaView>
                <View>
                    <ImageBackground
                        source={require('../../assets/image/homePagePhotos/apple3.jpeg')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Third Screen</Text>
                    {/* <Button title="Goto Fourth Page" onPress={() => props.navigation.pop(1)} /> */}
                    <Button
                        title='Goto Fourth Page'
                        onPress={() => navigation.push('FourthPage')}
                    />
                    <Button
                        title='Tap Here'
                        onPress={() =>
                            Alert.alert('Hello World', String.message, [
                                {
                                    text: 'ok',
                                    style: 'destructive',
                                },
                            ])
                        }
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};
const FourthPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.pageDesign}>
            <SafeAreaView>
                <View>
                    <ImageBackground
                        source={require('../../assets/image/homePagePhotos/apple2.png')}
                        style={styles.image2}
                    />
                    <Text style={styles.text}>Fourth Screen</Text>
                    <Button
                        title='Goto Fifth Page'
                        onPress={() => navigation.navigate('FifthPage')}
                    />
                    <Button
                        title='Tap Here'
                        onPress={() =>
                            Alert.alert('Hello World', String.message, [
                                {
                                    text: 'ok',
                                    style: 'destructive',
                                },
                            ])
                        }
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

const FifthPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.pageDesign}>
            <SafeAreaView>
                <View>
                    <ImageBackground
                        source={require('../../assets/image/homePagePhotos/apple2.png')}
                        style={styles.image2}
                    />
                    <Text style={styles.text}>Fifth Screen</Text>
                    <Button
                        title='Goto main Page'
                        onPress={() =>
                            navigation.dispatch(StackActions.popToTop())
                        }
                    />
                    <Button
                        title='Tap Here'
                        onPress={() =>
                            Alert.alert('Hello World', String.message, [
                                {
                                    text: 'ok',
                                    style: 'destructive',
                                },
                            ])
                        }
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

export default HomePage;

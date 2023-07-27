//import liraries
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Button,
    ImageBackground,
    SafeAreaView,
} from 'react-native';
import String from '../../Strings/string';

const SecondPage = ({}) => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.pageDesign}>
            <SafeAreaView>
                <View>
                    <ImageBackground
                        source={require('../../assets/image/homePagePhotos/apple2.png')}
                        style={styles.image2}
                    />
                    <Text style={styles.text}>Second Screen</Text>
                    <Button
                        title='Goto Third Page'
                        onPress={() => navigation.navigate('ThirdPage')}
                    />
                    <Text style={{ fontSize: 10 }}>{route.params.title}</Text>
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

// define your styles
const styles = StyleSheet.create({
    pageDesign: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black',
    },
    text: {
        fontSize: 30,
        // color: 'white',
        flex: 8,
        alignSelf: 'center',
        flexDirection: 'column',
    },
    image: {
        height: 350,
        width: 350,
        flex: 15,
        // backgroundColor: 'black'
    },
    image2: {
        height: 270,
        width: 270,
        flex: 15,
        // backgroundColor: 'black',
        marginTop: 40,
    },
    buttonView: {
        flex: 1,
        marginBottom: 20,
        // backgroundColor: 'black'
    },
});

//make this component available to the app
export default SecondPage;

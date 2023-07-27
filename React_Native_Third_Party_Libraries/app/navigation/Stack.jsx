import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VideoHomePage from '../modules/video-home-page/VideoHome';
import VideoPlayer from '../modules/video/Video';

// create a component
const StackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoList">
        <Stack.Screen
          name="VideoList"
          component={VideoHomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="VideoPage" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default StackNavigation;

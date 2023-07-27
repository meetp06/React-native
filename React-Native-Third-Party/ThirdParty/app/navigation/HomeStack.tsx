import { createStackNavigator } from '@react-navigation/stack';
import { VideoScreen } from '../components';
import { ROUTES } from '../constants';
import { HomeScreen } from '../modules';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: 'Home',
        }}
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          presentation: 'modal',
          headerTitle: 'Video',
        }}
        name={ROUTES.VIDEO_SCREEN}
        component={VideoScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

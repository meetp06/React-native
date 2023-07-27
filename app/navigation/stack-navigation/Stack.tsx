import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { ArrowBendUpLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import RouteNames from '../../constants/RouteStrings';
import { NotificationPage, Profile, VideoController } from '../../modules';
import { Login } from '../../modules/auth/login';
import SignUpPage from '../../modules/auth/sign-up/SignUp';
import WebViewComponent from '../../services/webview-page/WebView';
import { moderateScale } from '../../theme';
import ApplicationStyle from '../../theme/ApplicationStyle';
import Color from '../../theme/Colors';
import { navigateBack, navigationRef } from '../../utils';
import AppDrawer from '../drawer-navigation/Drawer';

const Stack = createNativeStackNavigator<HomeStackParamsList>();

export type HomeStackParamsList = {
  [RouteNames.Login]: undefined;
  [RouteNames.SignUp]: undefined;
  [RouteNames.RootPage]: undefined;
  [RouteNames.NotificationPage]: undefined;
  [RouteNames.UserDetails]: undefined;
  [RouteNames.VideoPlayer]: undefined;
  [RouteNames.Policy]: undefined;
  [RouteNames.TandC]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<HomeStackParamsList>;

// const isLoginIn = useSelector();
const StackNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.Login} component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name={RouteNames.SignUp}
        component={SignUpPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RouteNames.RootPage}
        component={AppDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RouteNames.NotificationPage}
        component={NotificationPage}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigateBack()}>
              <ArrowBendUpLeft
                size={moderateScale(25)}
                color={Color.BlueC}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name={RouteNames.UserDetails}
        component={Profile}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigateBack()}>
              <ArrowBendUpLeft
                size={moderateScale(25)}
                color={Color.BlueC}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name={RouteNames.VideoPlayer}
        component={VideoController}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigateBack()}>
              <ArrowBendUpLeft
                size={moderateScale(25)}
                color={Color.BlueC}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name={RouteNames.TandC}
        component={WebViewComponent}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigateBack()}>
              <ArrowBendUpLeft
                size={moderateScale(25)}
                color={Color.BlueC}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name={RouteNames.Policy}
        component={WebViewComponent}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigateBack()}>
              <ArrowBendUpLeft
                size={moderateScale(25)}
                color={Color.BlueC}
                style={ApplicationStyle.iconPositionLeftSide}
              />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;

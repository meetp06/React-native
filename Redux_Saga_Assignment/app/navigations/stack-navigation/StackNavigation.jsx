import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArrowBendUpLeft} from 'phosphor-react-native';
import {TouchableOpacity, View} from 'react-native';
import {ROUTEKEY} from '../../constants';
import {Cart, LogIn, ProductDetails, SignUp} from '../../modules';
import {Checkout} from '../../modules/screens/checkout-page';
import {moderateScale} from '../../themes';
import TabNavigation from '../tab-navigation/TabNavigation';
import styles from './StackNavigationStyles';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTEKEY.LOGIN}
          component={LogIn}
          options={{headerShown: false, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name={ROUTEKEY.SIGNUP}
          component={SignUp}
          options={{headerShown: false, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name={ROUTEKEY.HOME}
          component={TabNavigation}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={ROUTEKEY.PRODUCTDETAILS}
          component={ProductDetails}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Product information',
            headerLeft: () => {
              const navigation = useNavigation();
              const gotoHome = () => {
                navigation.goBack();
              };
              return (
                <View style={styles.root}>
                  <TouchableOpacity
                    onPress={() => gotoHome()}
                    style={styles.touchableOpacity}>
                    <ArrowBendUpLeft size={moderateScale(25)} />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name={ROUTEKEY.CART}
          component={Cart}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => {
              const navigation = useNavigation();
              const gotoHome = () => {
                navigation.replace(ROUTEKEY.HOME);
              };
              return (
                <View style={styles.root}>
                  <TouchableOpacity
                    onPress={() => gotoHome()}
                    style={styles.touchableOpacity}>
                    <ArrowBendUpLeft size={moderateScale(25)} />
                  </TouchableOpacity>
                </View>
              );
            },
            headerTitle: 'Product',
          }}
        />
        <Stack.Screen
          name={ROUTEKEY.CHECKOUT}
          component={Checkout}
          options={{
            headerTitle: 'Checkout',
            headerTitleAlign: 'center',
            headerLeft: () => {
              return <View />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;

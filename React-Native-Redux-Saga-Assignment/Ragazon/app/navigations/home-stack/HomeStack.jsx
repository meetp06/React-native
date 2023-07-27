import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowFatLeft, MagnifyingGlass } from 'phosphor-react-native';
import { CartIcon, NormalHeader } from '../../components';
import { ROUTES, STRINGS } from '../../constants';
import { CheckOutScreen, HomeScreen, ProductInfo } from '../../modules';
import { CartScreen } from '../../modules/cart';
import { COLORS, moderateScale } from '../../theme';
import { navigateBack, navigationPop } from '../../utils';
import { useHomeStack } from './hooks';

/*
 * Home stack Navigation.
 *
 * @return - Home stack navigation component
 */

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { isSearchEnabled, toggleSearch, goToCart, onSignOut, itemCount } =
    useHomeStack();

  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME_SCREEN}>
      <Stack.Screen
        options={{
          header: () => (
            <NormalHeader
              title={STRINGS.headerTitles.cart}
              leftComponent={
                <ArrowFatLeft
                  size={moderateScale(24)}
                  weight='fill'
                  color={COLORS.PrimaryColor}
                />
              }
              leftComponentOnPress={() => {
                navigationPop(0, true);
              }}
            />
          ),
        }}
        name={ROUTES.CART_SCREEN}
        component={CartScreen}
      />
      <Stack.Screen
        options={{
          header: () => (
            <NormalHeader
              title={STRINGS.headerTitles.home}
              leftComponent={
                !isSearchEnabled && (
                  <MagnifyingGlass
                    size={moderateScale(26)}
                    color={COLORS.PrimaryColor}
                    weight='bold'
                  />
                )
              }
              leftComponentOnPress={toggleSearch}
              rightComponent={
                <CartIcon
                  onPressCart={goToCart}
                  onSignOut={onSignOut}
                  itemCount={itemCount}
                />
              }
            />
          ),
        }}
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          header: () => (
            <NormalHeader
              title={STRINGS.headerTitles.productDetails}
              leftComponent={
                <ArrowFatLeft
                  size={moderateScale(24)}
                  weight='fill'
                  color={COLORS.PrimaryColor}
                />
              }
              leftComponentOnPress={() => {
                navigateBack();
              }}
            />
          ),
        }}
        name={ROUTES.PRODUCT_INFO}
        component={ProductInfo}
      />
      <Stack.Screen
        options={{
          header: () => (
            <NormalHeader
              title={STRINGS.headerTitles.checkout}
              leftComponent={
                <ArrowFatLeft
                  size={moderateScale(24)}
                  weight='fill'
                  color={COLORS.PrimaryColor}
                />
              }
              leftComponentOnPress={() => {
                navigationPop(0, true);
              }}
            />
          ),
        }}
        name={ROUTES.CHECKOUT}
        component={CheckOutScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

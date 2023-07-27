import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArrowFatLeft } from 'phosphor-react-native';
import { NormalHeader } from '../../components';
import { ROUTES, STRINGS } from '../../constants';
import { OrderScreen } from '../../modules/orders';
import OrderDetailsScreen from '../../modules/orders/order-details/OrderDetailsScreen';
import { COLORS, moderateScale } from '../../theme';
import { navigateBack } from '../../utils';

/*
 * Order stack Navigation.
 *
 * @return - Order stack navigation component
 */

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.ORDER_SCREEN}>
      <Stack.Screen
        options={{
          header: () => <NormalHeader title={STRINGS.headerTitles.orders} />,
        }}
        name={ROUTES.ORDER_SCREEN}
        component={OrderScreen}
      />
      <Stack.Screen
        options={{
          header: () => (
            <NormalHeader
              title={STRINGS.headerTitles.orderDetails}
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
        name={ROUTES.ORDER_DETAILS}
        component={OrderDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;

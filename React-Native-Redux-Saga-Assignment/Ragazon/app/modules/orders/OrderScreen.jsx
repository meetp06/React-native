import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Images } from '../../assets';
import { EmptyComponent, LoadingIndicator } from '../../components';
import { STRINGS } from '../../constants';
import { getOrdersPending } from '../../redux';
import { applicationStyles } from '../../theme';
import { OrderItem } from './order-item';

/*
 * Order screen component.
 *
 * @return - order screen.
 */

const OrderScreen = () => {
  const reduxDispatch = useDispatch();
  const userId = useSelector((state) => state.user.userDetails.id);
  const loadingStatus = useSelector((state) => state.order.loadingStatus);
  const orderList = useSelector((state) => state.order.orderList);

  useEffect(() => {
    reduxDispatch(getOrdersPending({ userId }));
  }, []);

  switch (loadingStatus) {
    case STRINGS.idle:
    case STRINGS.pending:
      return <LoadingIndicator />;

    case STRINGS.success:
      return (
        <View style={[applicationStyles.screen, applicationStyles.screenWhite]}>
          <FlatList
            contentContainerStyle={applicationStyles.screenGrow}
            ListEmptyComponent={
              <EmptyComponent
                src={Images.emptyCart}
                message={undefined}
              />
            }
            keyExtractor={(item) => item.id}
            data={orderList}
            renderItem={({ item }) => <OrderItem product={item} />}
          />
        </View>
      );

    default:
      break;
  }
};

export default OrderScreen;

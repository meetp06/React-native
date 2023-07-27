import { FlatList } from 'react-native';
import { Images } from '../../../../assets';
import { EmptyComponent } from '../../../../components';
import { applicationStyles } from '../../../../theme';
import { CartItem } from '../cart-item';

/*
 * List of cart items.
 *
 * @param {cartList} - list of the cart.
 * @param {cartId} - id of the cart.
 * @return - cart list.
 */

const ListCart = ({ cartList, cartId }) => {
  return (
    <FlatList
      ListEmptyComponent={
        <EmptyComponent
          src={Images.emptyCart}
          message={undefined}
        />
      }
      contentContainerStyle={applicationStyles.screenGrow}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={cartList}
      renderItem={({ item }) => (
        <CartItem
          item={item}
          cartId={cartId}
        />
      )}
    />
  );
};

export default ListCart;

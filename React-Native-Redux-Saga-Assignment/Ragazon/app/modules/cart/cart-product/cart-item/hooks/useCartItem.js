import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { STRINGS } from '../../../../../constants';
import { removeFromCartPending, updateCartPending } from '../../../../../redux';

/*
 * Hook for managing the cart item state.
 *
 * @return -  objects having handleDecrement, handleDelete, handleIncrement.
 */

const useCartItem = (item, cartId) => {
  const reduxDispatch = useDispatch();

  const handleIncrement = () => {
    reduxDispatch(
      updateCartPending({
        cartId,
        line_item_id: item.id,
        body: {
          quantity: item.quantity + 1,
        },
      })
    );
  };

  const handleDecrement = () => {
    reduxDispatch(
      updateCartPending({
        cartId,
        line_item_id: item.id,
        body: {
          quantity: item.quantity - 1,
        },
      })
    );
  };

  const handleDelete = () => {
    Alert.alert('Confirm', STRINGS.deleteProductConfirmation, [
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () =>
          reduxDispatch(
            removeFromCartPending({
              cartId,
              line_item_id: item.id,
            })
          ),
      },

      {
        text: 'No',
      },
    ]);
  };

  return {
    handleDecrement,
    handleDelete,
    handleIncrement,
  };
};

export default useCartItem;

import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES, STRINGS } from '../../../../constants';
import { useLoader } from '../../../../hooks';
import {
  addCart,
  addCartPending,
  removeFromCart,
  removeFromCartPending,
} from '../../../../redux';
import { navigateWithPush } from '../../../../utils';

/*
 * Hook for managing the product info screen.
 *
 * @return - objects having product, isAlreadyAdded, loading,
 * addInCart, removefromCart, handleCheckout.
 */

const useProductInfo = () => {
  const route = useRoute();
  const reduxDispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartObject);
  const cartId = cart.id;

  const { product } = route.params;
  const loading = useSelector((state) => state.cart.loadingStatus);
  const holdingProduct =
    cart?.line_items?.filter(
      (curProduct) => curProduct.product_id === product.id
    ) ?? [];

  const isAlreadyAdded = holdingProduct.length;

  const [checkoutLoader, toggleCheckoutLoader] = useLoader();

  const addInCart = () => {
    reduxDispatch(
      addCartPending({
        cartId,
        body: {
          id: product.id,
          quantity: 1,
        },
      })
    );
  };

  const removefromCart = () => {
    reduxDispatch(
      removeFromCartPending({
        cartId,
        line_item_id: holdingProduct[0].id,
      })
    );
  };

  const handleCheckout = () => {
    toggleCheckoutLoader();
    addInCart();
  };

  useEffect(() => {
    if (loading === STRINGS.success && checkoutLoader) {
      toggleCheckoutLoader();
      navigateWithPush(ROUTES.CART_SCREEN);
    }
  }, [loading]);

  return {
    product,
    isAlreadyAdded,
    loading,
    addInCart,
    removefromCart,
    handleCheckout,
  };
};

export default useProductInfo;

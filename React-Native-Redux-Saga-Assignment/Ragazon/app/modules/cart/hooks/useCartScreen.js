import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES, STRINGS } from '../../../constants';
import { useLoader } from '../../../hooks';
import { emptyCartPending } from '../../../redux';
import { navigateWithPush } from '../../../utils';

/*
 * Hook for managing the cart screen.
 *
 * @return - objects having loadingStatus, cartList,
 * cartId, cartObject, handleCheckout.
 */

const useCartScreen = () => {
  const loadingStatus = useSelector((state) => state.cart.loadingStatus);
  const cartObject = useSelector((state) => state.cart.cartObject);
  const userId = useSelector((state) => state.user.userDetails.id);
  const cartList = cartObject?.line_items ?? [];
  const cartId = cartObject?.id ?? '';
  const [checkoutClicked, toggleCheckoutClicked] = useLoader();
  const subtotal = useRef(cartObject?.subtotal?.raw) ?? 0;
  const reduxDispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);

  const handleCheckout = () => {
    toggleCheckoutClicked();
    subtotal.current = cartObject.subtotal.raw;
    reduxDispatch(emptyCartPending({ cartId, userId, userDetails }));
  };

  useEffect(() => {
    if (loadingStatus === STRINGS.success && checkoutClicked) {
      toggleCheckoutClicked();
      navigateWithPush(ROUTES.CHECKOUT, {
        subtotal: subtotal.current,
      });
    }
  }, [loadingStatus]);

  return { loadingStatus, cartList, cartId, cartObject, handleCheckout };
};

export default useCartScreen;

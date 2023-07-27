import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT, ROUTES, STRINGS } from '../../../constants';
import { toggleSearch as toggleSearchAction } from '../../../redux';
import { navigateWithPush, navigateWithReset } from '../../../utils';

/*
 * Hook for managing the Home stack state.
 *
 * @return -  objects having isSearchEnabled, toggleSearch,
 * goToCart, onSignOut, itemCount.
 */

const useHomeStack = () => {
  const itemCount =
    useSelector((state) => state.cart.cartObject?.total_unique_items) ?? 0;
  const isSearchEnabled = useSelector(
    (state) => state.product.search.isSearchEnabled
  );

  const loadingStatus = useSelector((state) => state.cart.loadingStatus);
  const reduxDispatch = useDispatch();

  const toggleSearch = () => {
    reduxDispatch(toggleSearchAction());
  };

  const goToCart = () => {
    if (loadingStatus === STRINGS.success) navigateWithPush(ROUTES.CART_SCREEN);
    else Alert.alert(STRINGS.error, 'Please wait a bit..');
  };

  const onSignOut = () => {
    Alert.alert('Confirm', STRINGS.logOutConfirmation, [
      {
        text: 'Yes',
        onPress: () => {
          reduxDispatch(LOG_OUT());
          navigateWithReset(ROUTES.ROOT_STACK, ROUTES.LOGIN);
        },
      },

      {
        text: 'No',
        onPress: () => {},
      },
    ]);
  };

  return { isSearchEnabled, toggleSearch, goToCart, onSignOut, itemCount };
};

export default useHomeStack;

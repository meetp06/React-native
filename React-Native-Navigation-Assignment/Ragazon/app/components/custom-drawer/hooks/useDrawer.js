import { useContext } from 'react';
import {
    CartContext,
    CategoryContext,
    DrawerContext,
    UserDetailsContext,
} from '../../../contexts';
import { ROUTES, STRINGS } from '../../../constants';
import { navigateWithReset, navigationWithParam } from '../../../utils';
import { Alert } from 'react-native';
import { clearUserFromLocal } from '../../../services';

/*
 * Custom hook for managing the custom drawer state.
 *
 * @param - none.
 * @return - object consisting of various onPress handler.
 */

const useDrawer = () => {
    const { setCartList } = useContext(CartContext);
    const { setCategory } = useContext(CategoryContext);
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);
    const { setDrawerSelected } = useContext(DrawerContext);

    const userName = userDetails?.fName ?? 'Guest';
    const email = userDetails?.email;

    const handleHome = () => {
        navigationWithParam(ROUTES.HomeTab);
        setDrawerSelected(ROUTES.HomeTab);
    };

    const handleProfile = () => {
        navigationWithParam(ROUTES.Profile);
        setDrawerSelected(ROUTES.Profile);
    };

    const handleAccount = () => {
        navigationWithParam(ROUTES.Account);
        setDrawerSelected(ROUTES.Account);
    };

    const handleLogOut = () => {
        Alert.alert('Confirm', STRINGS.logOutConfirmation, [
            {
                text: 'Yes',
                onPress: () => {
                    clearUserFromLocal(
                        setCartList,
                        setCategory,
                        setDrawerSelected,
                        setUserDetails
                    );
                    navigateWithReset(ROUTES.RootStack, ROUTES.Login);
                },
            },

            {
                text: 'No',
                onPress: () => {},
            },
        ]);
    };

    return {
        userName,
        email,
        handleHome,
        handleAccount,
        handleLogOut,
        handleProfile,
    };
};

export default useDrawer;

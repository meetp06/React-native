import { useState, useEffect } from 'react';
import { getUserDetailsFromLocal, getCartFromLocal } from '../../services';
import { useCartList } from '../useCartList';
import { useUserLoginDetails } from '../useUserLoginDetails';
import useDrawerSelected from '../useDrawerSelected/useDrawerSelected';
import { useCategory } from '../useCategory';

/*
 * Hook for Main App screen.
 *
 * @return {object} - having various updater functions for contexts.
 */

const useApp = () => {
    const [userDetails, setUserDetails] = useUserLoginDetails();
    const [drawerSelected, setDrawerSelected] = useDrawerSelected();
    const [isLoading, setIsLoading] = useState(true);
    const [cartList, setCartList] = useCartList();
    const [selectedCategory, setCategory] = useCategory();

    useEffect(() => {
        (async () => {
            const tempUserDetails = await getUserDetailsFromLocal();
            const tempCartList = await getCartFromLocal();

            setCartList(() => tempCartList);
            setUserDetails(() => tempUserDetails);
            setIsLoading(() => false);
        })();
    }, []);

    return {
        isLoading,
        userDetails,
        setUserDetails,
        cartList,
        setCartList,
        drawerSelected,
        setDrawerSelected,
        selectedCategory,
        setCategory,
    };
};

export default useApp;

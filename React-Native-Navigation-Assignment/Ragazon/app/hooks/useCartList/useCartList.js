import { useState } from 'react';

/*
 * Hook for storing the cart items.
 *
 * @return - cart list and its updater function.
 */

const useCartList = () => {
    const [cartList, setCartList] = useState([]);

    return [cartList, setCartList];
};

export default useCartList;

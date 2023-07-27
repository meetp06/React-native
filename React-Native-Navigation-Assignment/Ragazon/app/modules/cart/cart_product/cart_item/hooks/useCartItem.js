import { useContext, useState } from 'react';
import { PRODUCTS } from '../../../../../constants';
import { CartContext } from '../../../../../contexts';
import { updateFromCart, deleteFromCart } from '../../../../../services';

/*
 * Hook for managing the cart item state.
 *
 * @return -  objects having various onPress handlers.
 */

const useCartItem = (item, index) => {
    const { cartList, setCartList } = useContext(CartContext);
    const currentProduct = PRODUCTS[item.id - 1];
    const [itemCount, setItemCount] = useState(item.count);

    const handleIncrement = () => {
        updateFromCart(cartList, setCartList, index, {
            ...item,
            count: itemCount + 1,
        });

        setItemCount((count) => count + 1);
    };

    const handleDecrement = () => {
        updateFromCart(cartList, setCartList, index, {
            ...item,
            count: itemCount - 1,
        });

        setItemCount((count) => count - 1);
    };

    const handleDelete = () => {
        deleteFromCart(cartList, setCartList, index);
    };

    return {
        handleDecrement,
        handleDelete,
        handleIncrement,
        currentProduct,
        itemCount,
    };
};

export default useCartItem;

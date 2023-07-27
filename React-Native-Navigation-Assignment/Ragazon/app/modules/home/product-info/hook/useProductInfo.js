import { useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts';
import { addToCart } from '../../../../services';

/*
 * Hook for managing the product info screen.
 *
 * @return - objects having current product
 * from the route and various onPress handlers.
 */

const useProductInfo = () => {
    const route = useRoute();
    const { product } = route.params;

    const { cartList, setCartList } = useContext(CartContext);

    const isAlreadyAdded = cartList.some(
        (currentProduct) => currentProduct?.id === product?.id
    );

    const addInCart = () => {
        addToCart(cartList, setCartList, { id: product.id, count: 1 });
    };

    return { product, isAlreadyAdded, addInCart };
};

export default useProductInfo;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { PRODUCTS, ROUTES, STORAGEKEYS } from '../../constants';

/*
 * Function to get user details from local.
 *
 * @return - user details.
 */

const getUserDetailsFromLocal = async () => {
    let userDetails = await AsyncStorage.getItem(STORAGEKEYS.UserInfoKey);
    userDetails = userDetails ? JSON.parse(userDetails) : {};

    return userDetails;
};

/*
 * Function to set user details from local.
 *
 * @return none.
 */

const setUserDetailsFromLocal = async (userDetails) => {
    await AsyncStorage.setItem(
        STORAGEKEYS.UserInfoKey,
        JSON.stringify(userDetails)
    );
};

/*
 * Function to get cart details from local.
 *
 * @return - cart details.
 */

const getCartFromLocal = async () => {
    let cartList = await AsyncStorage.getItem(STORAGEKEYS.CartListKey);
    cartList = cartList ? JSON.parse(cartList) : [];
    return cartList;
};

/*
 * Function to update cart details from local.
 *
 .
 * @return none.
 */

const updateCartFromLocal = async (cartList) => {
    await AsyncStorage.setItem(
        STORAGEKEYS.CartListKey,
        JSON.stringify(cartList)
    );
};

/*
 * Function to add productItem into cart.
 *
 * @param {cartList} - cartList having cart items.
 * @param {setCartList} - updater function for cart item.
 * @param {productItem} - productItem to add.
 * @return none.
 */

const addToCart = (cartList, setCartList, productItem) => {
    cartList.push(productItem);
    updateCartFromLocal(cartList);
    setCartList(() => [...cartList]);
};

/*
 * Function to update productItem into cart.
 *
 * @param {cartList} - cartList having cart items.
 * @param {setCartList} - updater function for cart item.
 * @param {itemIndex} - index to update.
 * @param {item} - updated productItem.
 * @return none.
 */

const updateFromCart = (cartList, setCartList, itemIndex, item) => {
    const newCartList = cartList.map((curItem, index) =>
        itemIndex !== index ? curItem : item
    );
    updateCartFromLocal(newCartList);
    setCartList(newCartList);
};

/*
 * Function to delete productItem from cart.
 *
 * @param {cartList} - cartList having cart items.
 * @param {setCartList} - updater function for cart item.
 * @param {itemIndex} - index to delete.
 * @return none.
 */

const deleteFromCart = (cartList, setCartList, itemIndex) => {
    const newCartList = cartList.filter((_, index) => itemIndex !== index);
    updateCartFromLocal(newCartList);
    setCartList(newCartList);
};

/*
 * Function to empty Cart.
 *
 * @param {cartList} - cartList having cart items.
 * @param {setCartList} - updater function for cart item.
 * @return - none.
 */

const emptyCart = (cartList, setCartList) => {
    cartList.length = 0;
    updateCartFromLocal([]);
    setCartList([]);
};

/*
 * Function to get cart cost.
 *
 * @param {cartList} - cartList having cart items.
 * @return total cost of the cartItems.
 */

const getCartCost = (cartList) => {
    return cartList.reduce(
        (tillSum, { id, count }) => tillSum + count * PRODUCTS[id - 1].price,
        0
    );
};

/*
 * Function to clear the global contexts during the logout.
 *
 * @param {setCartList} - updater function for cart item.
 * @param {setCategory} - updater function for category.
 * @param {setDrawerSelected} - updater function for drawer selected item.
 * @param {setUserDetails} - updater function for user details.
 * @return none.
 */

const clearUserFromLocal = async (
    setCartList,
    setCategory,
    setDrawerSelected,
    setUserDetails
) => {
    setCartList(() => []);
    setUserDetails(() => {});
    setDrawerSelected(() => ROUTES.HomeTab);
    setCategory(() => 'All');

    await AsyncStorage.multiRemove([
        STORAGEKEYS.CartListKey,
        STORAGEKEYS.UserInfoKey,
    ]);
};

export {
    getUserDetailsFromLocal,
    setUserDetailsFromLocal,
    getCartFromLocal,
    updateCartFromLocal,
    clearUserFromLocal,
    addToCart,
    updateFromCart,
    deleteFromCart,
    getCartCost,
    emptyCart,
};

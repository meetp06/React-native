export default {
  API_BASE_URL: 'https://api.chec.io/v1',
  API_TOKEN: 'sk_523869a17b575abab7ca49e061ec989f3b614ec69c10d',
  API_HEADER: {
    'Content-Type': 'application/json',
    'X-Authorization': 'sk_523869a17b575abab7ca49e061ec989f3b614ec69c10d',
  },
  SIGN_UP_URL: `customers`,
  LOGIN_URL: (email) => `customers?email=${email}`,
  UPDATE_URL: (id) => `customers/${id}`,
  CATEGORIES_URL: `categories`,
  PRODUCTS_URL: (url) => `products?${url}`,
  ORDER_URL: (userId) => `customers/${userId}/orders`,
  CART_URL: `carts`,
  GET_CART_URL: (cartId) => `carts/${cartId}`,
  ADD_CART_URL: (cartId) => `carts/${cartId}`,
  UPDATE_CART_URL: (apiOptions) =>
    `carts/${apiOptions.cartId}/items/${apiOptions.line_item_id}`,
  DELETE_CART_URL: (apiOptions) =>
    `carts/${apiOptions.cartId}/items/${apiOptions.line_item_id}`,
  CHECKOUT_URL: (cartId) => `checkouts/${cartId}?type=cart`,
  PLACE_ORDER_URL: (checkoutId) => `checkouts/${checkoutId}`,
};

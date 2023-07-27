import {useState} from 'react';

const CartHook = () => {
  const [cartArray, setCartArray] = useState([]);
  return [cartArray, setCartArray];
};

export default CartHook;

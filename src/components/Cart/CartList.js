import React from 'react';
import useCartStore from '../../stores/useCartStore';
import CartItem from './CartItem';

const CartList = () => {
  const { cart } = useCartStore();

  return (
    <ul>
      {cart.map((item) => {
        return <CartItem key={item.name} item={item} />;
      })}
    </ul>
  );
};

export default CartList;

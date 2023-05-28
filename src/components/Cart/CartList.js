import React from 'react';
import useCartStore from '../../stores/useCartStore';
import useUserStore from '../../stores/useUserStore';
import CartItem from './CartItem';

const CartList = () => {
  const { carts } = useCartStore();
  const { userEmail } = useUserStore();

  return (
    <ul>
      {carts[userEmail].length > 0 ? (
        carts[userEmail].map((cart) => {
          return <CartItem key={cart} item={cart} />;
        })
      ) : (
        <li>장바구니가 존재하지 않습니다.</li>
      )}
    </ul>
  );
};

export default CartList;

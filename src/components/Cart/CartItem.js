import React from 'react';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import useCartStore from '../../stores/useCartStore';
import useUserStore from '../../stores/useUserStore';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { userEmail } = useUserStore();
  const { removeToCart } = useCartStore();

  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <div className={styles.image}>
          <img src={item.image} alt={item.name} />
        </div>
        <h3 className={styles.name}>{item.name}</h3>
      </div>
      <string className={styles.price}>{item.price}원</string>
      <button
        type='button'
        className={styles.close}
        onClick={() => removeToCart(userEmail, item.name)}
      >
        <Close width='20' height='20' />
      </button>
    </li>
  );
};

export default CartItem;

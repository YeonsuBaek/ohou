import React from 'react';
import CartList from '../components/Cart/CartList';
import Header from '../Layouts/Header';
import styles from './CartPage.module.css';

const CartPage = () => {
  return (
    <>
      <Header />
      <section className={styles.page}>
        <div className={styles.response}>
          <CartList />
        </div>
      </section>
    </>
  );
};

export default CartPage;

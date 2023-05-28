import React from 'react';
import ProductList from '../components/Product/ProductList';
import styles from './StorePage.module.css';

const StorePage = () => {
  return (
    <section className={styles.page}>
      <div className={styles.response}>
        <h2 className={styles.title}>인기상품</h2>
        <ProductList />
      </div>
    </section>
  );
};

export default StorePage;

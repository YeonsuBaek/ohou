import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <li className={styles.item}>
      <a href='/'>
        <div className={styles.image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <strong className={styles.price}>{product.price}원</strong>
      </a>
    </li>
  );
};

export default ProductItem;

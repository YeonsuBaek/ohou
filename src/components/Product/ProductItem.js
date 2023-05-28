import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <li className={styles.item}>
      <Link to={'/product/' + product.name}>
        <div className={styles.image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <strong className={styles.price}>{product.price}원</strong>
      </Link>
    </li>
  );
};

export default ProductItem;

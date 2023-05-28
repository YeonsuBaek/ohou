import React from 'react';
import useProductStore from '../../stores/useProductStore';
import ProductItem from './ProductItem';
import styles from './ProductList.module.css';

const ProductList = () => {
  const { products } = useProductStore();

  return (
    <ul className={styles.list}>
      {products &&
        products.map((product) => {
          return <ProductItem key={product.name} product={product} />;
        })}
    </ul>
  );
};

export default ProductList;

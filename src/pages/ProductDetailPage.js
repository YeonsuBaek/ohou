import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((v) => v.name === id);

  return <h2>{product.name}</h2>;
};

export default ProductDetailPage;

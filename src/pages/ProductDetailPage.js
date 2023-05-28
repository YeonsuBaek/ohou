import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Layouts/Header';
import SelectForm from '../components/UI/SelectForm';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import OutlinedButton from '../components/UI/Buttons/OutlinedButton';
import styles from './ProductDetail.module.css';

const ProductDetailPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((v) => v.name === id);

  return (
    <>
      <Header />
      <section className={styles.page}>
        <div className={styles.response}>
          <div className={styles.image}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles.detail}>
            <div className={styles.info}>
              <h3 className={styles.name}>{product.name}</h3>
              <strong className={styles.price}>{product.price}원</strong>
            </div>
            <div>
              <SelectForm />
              <div className={styles.buttons}>
                <OutlinedButton text='장바구니' />
                <PrimaryButton text='구매하기 ' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;

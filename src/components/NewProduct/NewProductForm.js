import React from 'react';
import styles from './NewProductForm.module.css';

const NewProductForm = () => {
  return (
    <form className={styles.form}>
      <button type='button' className={styles.imgButton}>
        <label htmlFor='image'>대표 사진 올리기</label>
        {/* <img src='' alt='' /> */}
        <input id='image' type='file' accept='image/*' />
      </button>
      <div>
        <div>
          <label className='visually-hidden' htmlFor='name'>
            상품명
          </label>
          <input id='name' type='text' placeholder='상품명' />
        </div>
        <div>
          <label className='visually-hidden' htmlFor='price'>
            상품 가격
          </label>
          <input id='price' type='text' placeholder='상품 가격' />
        </div>
      </div>
    </form>
  );
};

export default NewProductForm;

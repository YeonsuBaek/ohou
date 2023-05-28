import React from 'react';
import styles from './NewProductForm.module.css';
import useProductStore from '../../stores/useProductStore';

const NewProductForm = () => {
  const { image, setName, setPrice, setImage } = useProductStore();
  const imageRef = React.useRef();

  const uploadImage = () => {
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <form className={styles.form}>
      <button type='button' className={styles.imgButton}>
        <label htmlFor='image'>대표 사진 올리기</label>
        {image && <img src={image} alt='' />}
        <input
          id='image'
          type='file'
          accept='image/*'
          onChange={uploadImage}
          ref={imageRef}
        />
      </button>
      <div>
        <div>
          <label className='visually-hidden' htmlFor='name'>
            상품명
          </label>
          <input
            id='name'
            type='text'
            placeholder='상품명'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='visually-hidden' htmlFor='price'>
            상품 가격
          </label>
          <input
            id='price'
            type='text'
            placeholder='상품 가격'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default NewProductForm;

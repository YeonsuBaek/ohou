import React from 'react';
import styles from './Buttons.module.css';

const PrimaryButton = (props) => {
  return (
    <button
      className={`${styles.button} ${styles.primary}`}
      onClick={props.handleAddProduct}
    >
      {props.text}
    </button>
  );
};

export default PrimaryButton;

import React from 'react';
import styles from './Buttons.module.css';

const PrimaryButton = (props) => {
  return (
    <button type={props.type} className={`${styles.button} ${styles.primary}`}>
      {props.text}
    </button>
  );
};

export default PrimaryButton;

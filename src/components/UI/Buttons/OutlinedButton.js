import React from 'react';
import styles from './Buttons.module.css';

const OutlinedButton = (props) => {
  return (
    <button
      className={`${styles.button} ${styles.outlined}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default OutlinedButton;

import React from 'react';
import styles from './Buttons.module.css';

const OutlinedButton = ({ text }) => {
  return (
    <button className={`${styles.button} ${styles.outlined}`}>{text}</button>
  );
};

export default OutlinedButton;

import React from 'react';
import styles from './Buttons.module.css';

const PrimaryButton = ({ text }) => {
  return (
    <button className={`${styles.button} ${styles.primary}`}>{text}</button>
  );
};

export default PrimaryButton;

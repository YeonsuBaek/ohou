import React from 'react';
import styles from './Buttons.module.css';

const GhostButton = ({ text }) => {
  return (
    <button className={`${styles.button} ${styles.secondary}`}>{text}</button>
  );
};

export default GhostButton;

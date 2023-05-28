import React from 'react';
import styles from './Overlay.module.css';

const Overlay = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose}></div>;
};

export default Overlay;

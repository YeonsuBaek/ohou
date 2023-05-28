import React from 'react';
import styles from './SelectForm.module.css';
import { ReactComponent as Caret } from '../../assets/icons/caret.svg';

const SelectForm = () => {
  return (
    <div className={styles.wrapper}>
      <select className={styles.select}>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
        <option>옵션4</option>
      </select>
      <i className={styles.caret}>
        <Caret width='20' height='20' fill='#b2b3b9' />
      </i>
    </div>
  );
};

export default SelectForm;

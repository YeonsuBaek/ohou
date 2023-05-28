import React from 'react';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import styles from './SearchInput.module.css';

const SearchInput = () => {
  return (
    <div className={styles.search}>
      <i className={styles.icon}>
        <Search width='20' height='20' />
      </i>
      <input type='text' placeholder='쇼핑 검색' />
    </div>
  );
};

export default SearchInput;

import React from 'react';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import { ReactComponent as Menu } from '../assets/icons/menu.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import SearchInput from '../components/UI/SearchInput';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.response}>
        <h1 className={styles.logo}>
          <a href='/' aria-label='오늘의집'>
            <Logo height='26' />
          </a>
        </h1>
        <div className={`sm-hidden ${styles.categories}`}>
          <a href='/'>커뮤니티</a>
          <a href='/' className={styles.isSelected}>
            쇼핑
          </a>
          <a href='/'>이사/시공/수리</a>
        </div>
        <button
          type='button'
          aria-label='메뉴 펼치기'
          className={`sm-only ${styles.button}`}
        >
          <Menu width='28' height='28' />
        </button>
        <div className={styles.wrapper}>
          <button
            type='button'
            aria-label='검색하기'
            className={`lg-hidden ${styles.button}`}
          >
            <Search width='28' height='28' />
          </button>
          <div className={`lg-only ${styles.search}`}>
            <SearchInput />
          </div>
          <a
            href='/'
            type='button'
            aria-label='장바구니'
            className={styles.button}
          >
            <Cart width='28' height='28' />
          </a>
        </div>
        <div className={`sm-hidden ${styles.userCategories}`}>
          <div className={styles.buttons}>
            <a href='/'>로그인</a>
            <a href='/'>고객센터</a>
          </div>
          <a href='/' aria-label='글쓰기' className={styles.writeButton}>
            <PrimaryButton text='글쓰기' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

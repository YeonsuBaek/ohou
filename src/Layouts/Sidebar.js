import React from 'react';
import styles from './Sidebar.module.css';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <Link to='/' className={styles.logo} aria-label='오늘의집'>
          <Logo />
        </Link>
        <Link to='/login' className={styles.login} aria-label='로그인'>
          <PrimaryButton text='로그인' />
        </Link>

        {/* NOTE: 회원 로그인 */}
        {/* <strong className={styles.name}>홍길동님</strong> */}
      </header>
    </aside>
  );
};

export default Sidebar;

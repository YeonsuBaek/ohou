import React from 'react';
import styles from './Sidebar.module.css';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <a href='/' className={styles.logo} aria-label='오늘의집'>
          <Logo />
        </a>
        <a href='/' className={styles.login} aria-label='로그인'>
          <PrimaryButton text='로그인' />
        </a>
      </header>
    </aside>
  );
};

export default Sidebar;

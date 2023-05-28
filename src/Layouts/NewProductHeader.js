import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Chevron } from '../assets/icons/chevron.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import styles from './NewProductHeader.module.css';

const NewProductHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.response}>
        <Link
          to='/'
          className={`sm-only ${styles.back}`}
          aria-label='뒤로 가기'
        >
          <Chevron width='24' height='24' />
        </Link>
        <Link to='/' className='sm-hidden' aria-label='홈으로'>
          <Logo height='26' />
        </Link>
        <Link to='/' className={styles.upload} aria-label='올리기'>
          <PrimaryButton text='올리기' />
        </Link>
      </div>
    </header>
  );
};

export default NewProductHeader;

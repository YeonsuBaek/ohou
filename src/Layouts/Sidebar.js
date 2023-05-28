import React from 'react';
import styles from './Sidebar.module.css';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import { Link } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';
import useAdminStore from '../stores/useAdminStore';
import { auth } from '../firebase-config';

const Sidebar = () => {
  const { userEmail, userName, setUserEmail, setUserName } = useUserStore();
  const { adminID, setAdminID, setAdminPW } = useAdminStore();

  const handleLogout = () => {
    if (adminID) {
      setAdminID('');
      setAdminPW('');
    }

    if (userEmail) {
      auth
        .signOut()
        .then(() => {
          setUserEmail('');
          setUserName('');
        })
        .catch((error) => {
          console.error('로그아웃 중 에러 발생:', error);
        });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <Link to='/' className={styles.logo} aria-label='오늘의집'>
          <Logo />
        </Link>
        {userEmail || adminID ? (
          <strong className={styles.name}>{userName || adminID}님</strong>
        ) : (
          <Link to='/login' className={styles.login} aria-label='로그인'>
            <PrimaryButton text='로그인' />
          </Link>
        )}
      </header>
      {(userEmail || adminID) && (
        <button className={styles.logout} type='button' onClick={handleLogout}>
          로그아웃
        </button>
      )}
    </aside>
  );
};

export default Sidebar;

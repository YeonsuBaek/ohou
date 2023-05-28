import React from 'react';
import useAdminStore from '../stores/useAdminStore';
import useModalStore from '../stores/useModalStore';
import useUserStore from '../stores/useUserStore';
import styles from './MyMenu.module.css';
import { auth } from '../firebase-config';

function MyMenu() {
  const { userEmail, setUserEmail, setUserName } = useUserStore();
  const { adminID, setAdminID, setAdminPW } = useAdminStore();
  const { setMyMenu } = useModalStore();

  const handleLogout = () => {
    if (adminID) {
      setAdminID('');
      setAdminPW('');
      setMyMenu(false);
    }

    if (userEmail) {
      auth
        .signOut()
        .then(() => {
          setUserEmail('');
          setUserName('');
          setMyMenu(false);
        })
        .catch((error) => {
          console.error('로그아웃 중 에러 발생:', error);
        });
    }
  };

  return (
    <aside className={styles.dropdown}>
      <ul>
        <li>마이페이지</li>
        <li>나의 쇼핑</li>
        <li>이벤트</li>
        <li>
          <button type='button' onClick={handleLogout}>
            로그아웃
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default MyMenu;

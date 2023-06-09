import React from 'react';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Search } from '../assets/icons/search.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import { ReactComponent as Menu } from '../assets/icons/menu.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import SearchInput from '../components/UI/SearchInput';
import styles from './Header.module.css';
import useModalStore from '../stores/useModalStore';
import { Link } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';
import useAdminStore from '../stores/useAdminStore';
import MyMenu from './MyMenu';

const Header = () => {
  const { setModal, myMenu, setMyMenu } = useModalStore();
  const { userEmail, userName } = useUserStore();
  const { adminID } = useAdminStore();

  return (
    <header className={styles.header}>
      <div className={styles.response}>
        <h1 className={styles.logo}>
          <Link to='/' aria-label='오늘의집'>
            <Logo height='26' />
          </Link>
        </h1>
        <div className={`sm-hidden ${styles.categories}`}>
          <Link to='/'>커뮤니티</Link>
          <Link to='/' className={styles.isSelected}>
            쇼핑
          </Link>
          <Link to='/'>이사/시공/수리</Link>
        </div>
        <button
          type='button'
          aria-label='메뉴 펼치기'
          className={`sm-only ${styles.button}`}
          onClick={() => setModal(true)}
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
          <Link
            to={'/cart/' + userName}
            type='button'
            aria-label='장바구니'
            className={styles.button}
          >
            <Cart width='28' height='28' />
          </Link>
        </div>
        <div className={`sm-hidden ${styles.userCategories}`}>
          <div className={styles.buttons}>
            {userEmail || adminID ? (
              <div className={styles.myMenu}>
                <button
                  type='button'
                  className={styles.name}
                  onClick={() => setMyMenu(!myMenu)}
                >
                  {userName || '관리자'}님
                </button>
                {myMenu && <MyMenu />}
              </div>
            ) : (
              <Link to='/login'>로그인</Link>
            )}
            <Link to='/'>고객센터</Link>
          </div>
          <Link
            to='/new-product'
            aria-label='글쓰기'
            className={styles.writeButton}
          >
            <PrimaryButton text='글쓰기' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import google from '../assets/icons/google.png';
import { auth } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useUserStore from '../stores/useUserStore';

const LoginPage = () => {
  const { setUserEmail, setUserName } = useUserStore();
  const navigate = useNavigate();

  const handleClickGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserEmail(data.user.email);
        setUserName(data.user.displayName);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={styles.page}>
      <div className={styles.response}>
        <Link to='/' className={styles.logo} aria-label='홈으로'>
          <h1>
            <Logo height='26' />
          </h1>
        </Link>

        <h2 className={styles.title}>관리자 전용 로그인</h2>
        <form className={styles.login}>
          <input type='text' placeholder='아이디' />
          <input type='password' placeholder='비밀번호' />
          <PrimaryButton text='로그인' />
        </form>

        <h2 className={styles.title}>회원 전용 간편 로그인</h2>
        <button
          className={styles.google}
          type='button'
          onClick={handleClickGoogle}
        >
          <img src={google} alt='' />
          Google 로그인
        </button>
      </div>
    </section>
  );
};

export default LoginPage;

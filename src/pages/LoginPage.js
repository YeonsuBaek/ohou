import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import PrimaryButton from '../components/UI/Buttons/PrimaryButton';
import google from '../assets/icons/google.png';
import { auth } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useUserStore from '../stores/useUserStore';
import useAdminStore from '../stores/useAdminStore';

const LoginPage = () => {
  const { setUserEmail, setUserName } = useUserStore();
  const { adminID, adminPW, setAdminID, setAdminPW } = useAdminStore();
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

  const handleChangeId = (e) => {
    setAdminID(e.target.value);
  };

  const handleChangePassword = (e) => {
    setAdminPW(e.target.value);
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();

    if (
      adminID === `${process.env.REACT_APP_ADMIN_ID}` &&
      adminPW === `${process.env.REACT_APP_ADMIN_PW}`
    ) {
      navigate('/');
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
      setAdminID('');
      setAdminPW('');
    }
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
        <form className={styles.login} onSubmit={handleSubmitAdmin}>
          <input type='text' placeholder='아이디' onChange={handleChangeId} />
          <input
            type='password'
            placeholder='비밀번호'
            onChange={handleChangePassword}
          />
          <PrimaryButton text='로그인' type='submit' />
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

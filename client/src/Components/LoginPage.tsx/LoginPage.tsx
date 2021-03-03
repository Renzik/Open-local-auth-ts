import React from 'react';
import styles from './LoginPage.module.css';

import google from '../../assets/googleLogo.png';

const LoginPage = () => {
  const googleLogin = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <p>Sign up with Google</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

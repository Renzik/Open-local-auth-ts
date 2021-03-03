import React, { useState } from 'react';
import styles from './LoginPage.module.css';

import google from '../../assets/googleLogo.png';
import githubBlack from '../../assets/githubLogoBlack.png';
import githubWhite from '../../assets/githubLogoWhite.png';
import twitter from '../../assets/twitterLogo.png';

import CustomButton from '../CustomButton/CustomButton';

const LoginPage = () => {
  const [whiteLogo, setWhiteLogo] = useState(false);
  console.log(whiteLogo);

  const googleLogin = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };

  const githubLogin = () => {};
  const twitterLogin = () => {};

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <CustomButton imageUrl={google} name='Google' onClick={googleLogin}>
          Google
        </CustomButton>
        <CustomButton
          toggleLogo={setWhiteLogo}
          imageUrl={whiteLogo ? githubWhite : githubBlack}
          name='Github'
          onClick={githubLogin}>
          Github
        </CustomButton>
        <CustomButton imageUrl={twitter} name='Twitter' onClick={twitterLogin}>
          Twitter
        </CustomButton>
      </div>
    </div>
  );
};

export default LoginPage;

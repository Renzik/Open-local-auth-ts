import { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import styles from './NavBar.module.css';

import { myContext } from '../Context';
import { IUser } from '../../types/maintypes';

const NavBar = () => {
  // getting our current user object present in App so that we can render routes depending if an user is logged in or not.
  const userObj = useContext(myContext) as IUser;

  const logout = async () => {
    const res: AxiosResponse = await axios.get('http://localhost:3000/api/users/logout', {
      withCredentials: true,
    });
    if (res.data === 'done') {
      // history.push('/login');
      window.location.href = '/';
    }
  };

  return (
    <div className={styles.navBarWrapper}>
      <ul className={styles.navBar}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {userObj ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <li>
            <Link to='/login'>Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;

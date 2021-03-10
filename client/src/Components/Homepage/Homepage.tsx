import React, { useContext } from 'react';
import { IUser } from '../../types/maintypes';
import { myContext } from '../Context';

const Homepage = () => {
  const context = useContext(myContext) as IUser;

  return (
    <div>{context ? <h1>Welcome back {context.username}</h1> : <h1>Welcome to me website</h1>}</div>
  );
};

export default Homepage;

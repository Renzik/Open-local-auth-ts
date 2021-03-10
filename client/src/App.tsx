import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import { myContext } from './Components/Context';
import Homepage from './Components/Homepage/Homepage';
import LoginPage from './Components/LoginPage.tsx/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import { IUser } from './types/maintypes';

const App = () => {
  // getting our current user object present in App so that we can render routes depending if an user is logged in or not.
  const userObj = useContext(myContext) as IUser;

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path='/login' component={LoginPage} /> */}
        <Route exact path='/' component={Homepage} />
        <Route path='/login'>{userObj ? <Redirect to='/' /> : <LoginPage />}</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import { myContext } from './Components/Context';
import Homepage from './Components/Homepage/Homepage';
import LoginPage from './Components/LoginPage.tsx/LoginPage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  // getting our current user object present in App so that we can render routes depending if an user is logged in or not.
  const userObj = useContext(myContext);
  console.log(userObj);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route exact path='/' component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

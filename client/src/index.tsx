import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Components/Context';

ReactDOM.render(
  <React.StrictMode>
    {/* App has access to our context variable -> value */}
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

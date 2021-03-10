import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Components/Context';

ReactDOM.render(
  <React.StrictMode>
    {/* App has access to our context variable -> value */}
    <Context>
      {/* App is a descendant of this provider, giving it and all of its descendants access to the context value */}
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

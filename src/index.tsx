import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <HashRouter>
      <App />
    </HashRouter>
  </>,
  document.getElementById('root'),
);

reportWebVitals();

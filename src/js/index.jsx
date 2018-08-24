import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';
import dotenv from 'dotenv';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import dotenv from 'dotenv';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

dotenv.config();

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

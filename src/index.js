import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

// 1st arg is all reducer in app
// 2st arg is initial state on startup
// 3rd arg apply Middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // pass in store to Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

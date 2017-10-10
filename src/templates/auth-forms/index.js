import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import './style/auth-form.scss';
import AuthForm from "./container/AuthForm";
import {
  BrowserRouter as Router
} from 'react-router-dom';

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <Router>
      <AuthForm/>
    </Router>
  </Provider>,
  document.getElementById('v-auth')
);
import 'babel-polyfill';
import reactDom from 'react-dom';
import React from 'react';
import store from './store.js';
import { Provider } from 'react-redux';
import Main from './Main/Main.js'
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path='/' component={Main} />
    </ConnectedRouter>
  </Provider>,
   document.getElementById('root')
  );
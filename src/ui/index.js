
/* eslint no-underscore-dangle: off */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import appReducer from 'ui/reducers/index';
import App from 'ui/components/App';
import About from 'ui/components/About';

const rootReducer = (state, action) => appReducer(state, action);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = compose(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, reduxDevTools, middleware);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="About" component={About} />
      </Route>
      <Route path="*" component={App}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-container'),
);

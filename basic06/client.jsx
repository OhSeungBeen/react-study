import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import Step01 from './Step01';

import Step02 from './Step02/Step02';
// import rootReducer from './Step02/modules';
// const store = createStore(rootReducer);

import Step03 from './Step03/Step03';
// import rootReducer from './Step03/modules';
// const store = createStore(rootReducer);

import Step04 from './Step04/Step04';
import rootReducer from './Step04/modules';
import loggerMiddleware from './Step04/lib/loggerMiddleware';
// logger 미들웨어 추가
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(/*loggerMiddleware*/ logger, ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Step04 />
  </Provider>,
  document.querySelector('#root')
);

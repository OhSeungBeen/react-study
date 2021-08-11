import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

import Step01 from './Step01';

import Step02 from './Step02/Step02';
// import rootReducer from './Step02/modules';
// const store = createStore(rootReducer);

import Step03 from './Step03/Step03';
// import rootReducer from './Step03/modules';
// const store = createStore(rootReducer);

import Step04 from './Step04/Step04';
// import rootReducer from './Step04/modules';
// import loggerMiddleware from './Step04/lib/loggerMiddleware';
// // logger 미들웨어 추가
// // thunk 미들웨어 추가
// const logger = createLogger();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(/*loggerMiddleware*/ logger, ReduxThunk)
// );

import Step05 from './Step05/Step05';
import rootReducer, { rootSaga } from './Step05/modules';
const logger = createLogger();
// saga 미들웨어 추가
const sagaMiddleware = createSagaMiddleware();
// devtools 미들웨어 추가

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Step05 />
  </Provider>,
  document.querySelector('#root')
);

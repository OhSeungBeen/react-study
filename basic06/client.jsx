import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Step01 from './Step01';

// Provider 컴포넌트를 사용할 수 있도록 App컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸 준다.
// Provider 컴포넌트를 사용할 때는 store를 props로 전달해 주어야 한다.
import Step02 from './Step02/Step02';
import rootReducer from './Step02/modules';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Step02 />
  </Provider>,
  document.querySelector('#root')
);

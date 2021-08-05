// root reducer
// 프로젝트에서 리듀서를 여러개 만들었을때 createstore함수를 사용하여
// 스토어를 만들때는 리듀서를 하나만 사용해야 한다. 그렇기 때문에 기존에
// 만들었던 리듀서를 하나로 합처 준다. combineReducers 유틸 함수 사용하여 합친다.

import React from 'react';
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

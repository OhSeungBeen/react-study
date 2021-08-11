import { combineReducers } from 'redux';
import counter from './counter';
import apiSample, { apiSampleSaga } from './apiSample';
import loading from './loading';
import { counterSaga } from './counter';
import { all } from '@redux-saga/core/effects';

const rootReducer = combineReducers({
  counter,
  apiSample,
  loading,
});

// root saga
export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 한다.
  yield all([counterSaga(), apiSampleSaga()]);
}

export default rootReducer;

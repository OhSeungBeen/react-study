import { combineReducers } from 'redux';
import counter from './counter';
import apiSample from './apiSample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  apiSample,
  loading,
});

export default rootReducer;

import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const initialState = 0;

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// thunk 생성 함수 만들기
// redux-thunk는 액션 생성 함수에서 일반 액션 객체를 반환하는 대신 함수를 반환한다.
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

export const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;

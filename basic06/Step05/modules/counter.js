// use redux-saga
import { createAction, handleActions } from 'redux-actions';
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from '@redux-saga/core/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefined를 두 번째 파라미터로 넣어 준다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1sec delay
  yield put(increase()); // dispatch

  //select 이용해서 사가 내부에서 현재 상태 조회
  const number = yield select((state) => state.counter);
  console.log(`현재값은 ${number}입니다.`);
}

function* decreaseSaga() {
  yield delay(1000); // 1sec delay
  yield put(decrease()); // dispatch
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
  yield takeEvery(INCREASE_ASYNC, increaseSaga);

  // throotle 이용해서 사가 n초에 단 한 번만 호출되되록 설정
  // 3초에 increaseSaga는 단 한번만 호출이 허용된다.
  // yield throotle(3000, INCREASE_ASYNC, increaseSaga);

  // takeLatest는 기존에 진행 중이던 작업이 있으면 취소하고
  // 가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

export const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;

// 루트 리듀서를 만들었던 것처럼 루트 사가를 만들어 주어야 한다. 추후 다른 리듀서에서도 사가를 만들어 등록한다.

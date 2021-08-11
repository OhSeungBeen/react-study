// saga API 사용
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { startLoading, finishLoading } from '../modules/loading';
import createRequestSaga from '../lib/createRequestSaga';

const GET_POST = 'apiSample/GET_POST';
const GET_POST_SUCCESS = 'apiSample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'apiSample/GET_POST_FAILURE';

const GET_USERS = 'apiSample/GET_USERS';
const GET_USERS_SUCCESS = 'apiSample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'apiSample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST)); // 로딩 시작
//   try {
//     // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있다.
//     //  첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수이다.
//     const post = yield call(api.getPost, action.payload); // api.getPost(action.payload)를 의미
//     yield put({ type: GET_POST_SUCCESS, payload: post.data });
//   } catch (e) {
//     yield put({ type: GET_POST_FAILURE, payload: e, error: true });
//   }
//   yield put(finishLoading(GET_POST)); // 로딩 완료
// }

// function* getUsersSaga(action) {
//   yield put(startLoading(GET_USERS)); // 로딩 시작
//   try {
//     const users = yield call(api.getUsers);
//     yield put({ type: GET_USERS_SUCCESS, payload: users.data });
//   } catch (e) {
//     yield put({ type: GET_USERS_FAILURE, payload: e, error: true });
//   }
//   yield put(finishLoading(GET_USERS)); // 로딩 완료
// }

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* apiSampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null,
};

const apiSample = handleActions(
  {
    // 요청 실패 시 _FAIURE가 붙은 액션을 리듀서에서 처리해 주거나 컨테이너 컴포넌트에서 try/catch 구문을 사용하여 에러를 처리한다.

    [GET_POST]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: true }, // 요청 시작
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false }, // 요청 완료
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false }, // 요청 완료
    }),
    [GET_USERS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: true },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false }, // 요청 시작
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USER: false }, // 요청 완료
    }),
  },

  initialState
);

export default apiSample;

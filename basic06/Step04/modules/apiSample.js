import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// API 사용
const GET_POST = 'apiSample/GET_POST';
const GET_POST_SUCCESS = 'apiSample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'apiSample/GET_POST_FAILURE';

const GET_USERS = 'apiSample/GET_USERS';
const GET_USERS_SUCCESS = 'apiSample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'apiSample/GET_USERS_FAILURE';

// API thunk 생성 함수 만들기
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때, 다른 액션을 디스패치 한다.
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

// export const getUsers = (id) => async (dispatch) => {
//   dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
//   try {
//     const response = await api.getUsers(id);
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };'

// lib/creatRequestThunk로 대체 (API thunk 생성 함수)
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.
const initialState = {
  // loading: {
  //   GET_POST: false,
  //   GET_USERS: false,
  // },
  post: null,
  users: null,
};

const apiSample = handleActions(
  {
    // 요청 실패 시 _FAIURE가 붙은 액션을 리듀서에서 처리해 주거나 컨테이너 컴포넌트에서 try/catch 구문을 사용하여 에러를 처리한다.

    // [GET_POST]: (state, action) => ({
    //   ...state,
    //   loading: { ...state.loading, GET_POST: true }, // 요청 시작
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false }, // 요청 완료
      post: action.payload,
    }),
    // [GET_POST_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: { ...state.loading, GET_POST: false }, // 요청 완료
    // }),
    // [GET_USERS]: (state, action) => ({
    //   ...state,
    //   loading: { ...state.loading, GET_USERS: true },
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false }, // 요청 시작
      users: action.payload,
    }),
    // [GET_USERS_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: { ...state.loading, GET_USER: false }, // 요청 완료
    // }),
  },

  initialState
);

export default apiSample;

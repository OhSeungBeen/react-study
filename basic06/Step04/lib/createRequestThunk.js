// API Request Thunk Create Function

import { finishLoading, startLoading } from '../modules/loading';

// 사용법 예) createRequest('GET_USERS',api.getUsers);
export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); // 요청 시작
    dispatch(startLoading(type)); // 로딩 시작 액션 디스패치
    try {
      const response = await request(params);
      // 성공
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      // 실패
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(finishLoading(type)); // 로딩 끝 액션 디스패치
      throw e;
    }
  };
}

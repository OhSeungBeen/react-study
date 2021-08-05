// 액션 타입 정의
// 액션 이름은 문자열 형태로, 주로 대문자로 작성하며 액션 이름은 고유해야 한다.
// 이름이 중복되면 의도하지 않은 결과가 발생 된다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의
// 다른 파일에서 불러와 사용 가능 하도록 exprot 한다.
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태 정의
const initialState = {
  number: 0,
};

// 리듀서 함수 정의
// 리듀서 함수가 맨 처음 호출될 때 state 값이 undefined이다.
// initialState를 기본값으로 설정하기 위해 함수의 파라미터에 기본값을 설정한다.
// 리듀에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜야 한다.
// ... 연산자 활용, 구조가 복잡해지거나 배열도 함께 다룰 경우 immer 라이브러리를 사용하면 쉽게 작성할 수 있다.
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;

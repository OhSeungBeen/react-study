// Redux
// 리덕스는 가장 많이 사용하는 리액트 상태 관리 라이브러리이다.
// 리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 효율적으로 관리할 수 있다.
// 컴포넌트끼리 똑같은 상태를 공유해야 할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태값을 전달하거나 업데이트 할 수 있다.
// ContextAPI를 통해서 전역 상태 관리를 할 수 있지만 리덕스를 사용하면 상태를 더욱 체계적으로 관리할 수 있다.
//편리한 개발자 도구 지원, 미들웨어 기능을 제공하여 비공기작업을 효율적으로 관리 할 수 있다.

// action(액션)
// 상태에 어떠한 변화가 필요하면 액션이 발생한다. 하나의 객체로 표현 한다.
// 액션 객체는 type 필드를 반드시 가지고 있어야 한다. (액션의 이름)
// 그 외의 값들은 상태 업데이트를 할때 참고해야 할 값이며, 마음대로 넣을 수 있다.
// const action = {
//   type: 'TOGGLE_VALUE',
//   data: {
//     id: 1,
//     text: 'learn ReactReduxContext',
//   },
// };

// action creator(액션 생성 함수)
// 액션 객체를 만들어 주는 함수
// 어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 번거로울 수 있고,
// 실수로 정보를 놓치는 것을 방지하기 위해 함수로 만들어 관리한다.
// function addTodo(data) {
//   return {
//     type: 'ADD_TODO',
//     data,
//   };
// }
// arrow function
// const addTodo2 = (data) => ({
//   type: 'ADD_TODO2',
//   data,
// });

// reducer(리듀서)
// 변화를 일으키는 함수이다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은
// 액션 객체를 파라미터로 받아 온다. 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해 준다.
// const initialState = {
//   conuter: 1,
// };
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         conuter: state.conuter + 1,
//       };
//     default:
//       return state;
//   }
// }

// store(스토어)
// 프로젝트에 리덕스를 적용하기 위해 store를 만든다. 한 개의 프로젝트는 단 하나의 스토어를 생성할 수 있다.
// 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어 있고, 그외에도 몇 가지 중요한 내장 함수를 가지고 있다.

// dispatch(디스패치)
// dispatch는 스토어의 내장 함수 중 하나이다. 디스패치는 액션을 발생시킨다. dispatch(action)과 같은 형태로
// 액션 객체를 파라미터로 넣어서 호출한다. 이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜 새로운
// 상태를 만든다.

// subscribe(구독)
// subscribe는 스토어의 내장 함수 중 하나이다. 함수 안에 리스너 함수를 파라미터로 넣어서 호출 하면,
// 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출 된다.
// const listener = () => {
//   console.log('상태가 업데이트됨');
// };
// const unsubscribe = store.unsubscribe(listener);
// unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출

// 리덕스는 리액트에 종속되는 라이브러리가 아니다.
// 다른 UI라이브러리/프레임워크 또는 바닐라 자바스크립트와 함께 사용할 수도 있다.
import React from 'react';

const Step01 = () => {
  return (
    <>
      <div>Redux</div>
    </>
  );
};

export default Step01;

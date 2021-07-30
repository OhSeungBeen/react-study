// Hooks
// useReducer
// useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른
// 값으로 업데이트해 주고 싶을 때 사용하는 Hook이다.
// 리듀서는 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아
// 새로운 상태를 반환하는 함수 이다.
// 리듀서 함수에서는 새로운 상태를 만들 때는 반드시 불변성을 지켜 주어야 한다.

import React, { useReducer, useState } from 'react';

const initialState = {
  counter: 0,
  name: '',
};

// 리덕스에서는 액션 객체에는 어떤 액션인지 알려주는 type필드가 꼭 있어야하지만,
// userReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요는 없다.
// 객체가 아니라 문자열, 숫자여도 상관없다.
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + action.data };
    case 'DECREMENT':
      return { ...state, counter: state.counter - action.data };
    case 'INPUT_NAME':
      return { ...state, [action.data.name]: action.data.value };
    default:
      return state;
  }
}

const Step06 = () => {
  // useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두번째 파라미터에는 해당 리듀서의 기본값을 넣어준다.
  // 반환값으로 state와 dispatch 함수를 받아온다. state는 현재 가리키고 있는 상태이고, dispatch는 액션을 발생시키는 함수이다.
  // useReducer를 사용했을 때 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것이다.
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickIncerement = () => {
    dispatch({ type: 'INCREMENT', data: 1 });
  };

  const onClickDecrement = () => {
    dispatch({ type: 'DECREMENT', data: 1 });
  };

  const onChangeName = (e) => {
    dispatch({ type: 'INPUT_NAME', data: e.target });
  };
  const { counter, name } = state;
  return (
    <>
      <div>
        <p>{counter}</p>
        <button onClick={onClickIncerement}>+1</button>
        <button onClick={onClickDecrement}>-1</button>
      </div>
      <div>
        <input name="name" value={name} onChange={onChangeName} />
      </div>
    </>
  );
};

export default Step06;

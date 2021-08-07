// useSelector
// useSelector Hook을 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.
// const 결과 = useSelector(상태 선택 함수)

// useDispatch
// useDispatch Hook을 사용하면 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다.

// useStore
// useStore를 사용하면 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용할 수 있다.
// 스토어에 직접 접근해야 하는 상황에만 사용해야 한다.
// const stroe = useStore();
// stroe.dispatch({ type: 'ACTION' });
// stroe.getState();

import React, { useCallback } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return <Counter number={number} onIncrease={onIncrease} onDecrease={decrease} />;
};
export default CounterContainer;

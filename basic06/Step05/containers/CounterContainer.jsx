import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrease,
  increase,
  increaseAsync,
  decreaseAsync,
} from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // const onIncrease = useCallback(() => {
  //   dispatch(increase());
  // }, [dispatch]);

  // const onDecrease = useCallback(() => {
  //   dispatch(decrease());
  // }, [dispatch]);

  const onIncreaseAsync = useCallback(() => {
    dispatch(increaseAsync());
  }, [dispatch]);

  const onDecreaseAsync = useCallback(() => {
    dispatch(decreaseAsync());
  }, [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={onIncreaseAsync}
      onDecrease={onDecreaseAsync}
    />
  );
};

export default CounterContainer;

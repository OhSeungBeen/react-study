// redux-saga
// redux-thunk는 함수 형태의 액션을 디스패치하여 미들웨어서 해당 함수에 스토어의 dispatch와 getState를 파라미터로
// 넣어 사용하는 원리이다. 그래서 구현한 thunk 함수 내부에서 원하는 API 요청도하고, 다른 액션을 디스패치하거나
// 현재 상태를 조회하였다. 대부분의 경우 thunk로 충분히 구현 가능하다.
// saga는 좀 더 까다로운 상황에서 유용하다.
// 예 )
// 1.기존 요청을 취소 처리해야 할 때(불필요한 중복 요청 방지)
// 2.특정 액션이 발생했을 때 다른 액션을 발생시키거나, API 요청 등 리덕스와 관계없는 코드를 실행할 때
// 3.웹소켓을 사용할 때
// API 요청 실패 시 재 요청해야 할 때

// 제너레이터 함수
// saga에는 ES6의 제너레이터 함수 문법을 사용한다. 함수를 작성할 때 함수를 특정 구간에 멈춰 놓을 수 있고,
// 원할 때 다시 돌아가게 할 수 있다.

// 하나의 함수에서 값을 여러 개 반환하는 것을 불가능하다. 호출할 때마다 1이 반환된다.
// 하지만 제너레이터 함수를 사용하면 함수에서 값을 순차적으로 반환할 수 있다. 함수의 흐름을 도중에 멈춰
// 놓았다가 다시 이어 진행시킬 수도 있다.
function weirdFunction() {
  return 1;
  return 2;
  return 3;
  return 4;
  return 5;
}
// 제너레이터 함수를 만들 때 function* 키워드를 사용한다.
function* generatorFunction() {
  console.log('모니터링 중...');
  let prevAction = null;
  while (true) {
    const action = yield;
    console.log('이전 액션', prevAction);
    prevAction = action;
    if (action.type === 'Hello') {
      console.log('안녕하세요');
    }
  }
}
// 제너레이터 함수를 호출했을 때 반환되는 객체를 제너레이터라고 한다.
// 제너레이터가 처음 만들어지면 함수의 흐름은 멈춰 있는 상태다. next()가 호출되면
// 다음 yield가 있는 곳까지 호출되고 다시 함수가 멈춘다. next 함수에 파라미터를
// 넣으면 제너레이터 함수에서 yeid를 사용하여 해당 값을 조회 할 수도 있다.
// saga는 이 코드와 비슷한 원리로 작동한다. 제너레이터 함수 기반으로 비동기 작업을
// 관리해 준다. 우리가 디스패치하는 액션을 모니터링해서 그에 따라 필요한 작업을
// 따로 수행할 수 있는 미들웨어이다.
const generator = generatorFunction();
generator.next(); // 안녕하세요 {value:1, done: false}
generator.next({ type: 'TEST' }); // function* {value: 3, done: false}
generator.next({ type: 'Hello' }); // {value: 4 done: true}

import React from 'react';
import ApiSampleContainer from './containers/ApiSampleContainer';
import CounterContainer from './containers/CounterContainer';

const Step05 = () => {
  return (
    <>
      <CounterContainer />
      <ApiSampleContainer />
    </>
  );
};

export default Step05;

// redux-action
// 액션 생성 함수를 더 짧은 코드로 작성할 수 있다. 그리고 리듀서를 작성할 때도 switch/case문이 아닌
// handleActions라는 함수를 사용하여 각액션마타 업데이트 함수를 설정하는 형식으로 작성해 줄 수 있다.

import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Todo from './components/Todos';
import TodoContainer from './containers/TodoContainer';

const Step03 = (state) => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
};

export default Step03;

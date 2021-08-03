// ContextAPI를 사용하면props로 받지 않고 Consumer를 사용하여
// context안에 들어 있는 값을 받아 올 수 있다.

import React from 'react';
import Step01Context from './Step01Context';

const Step01Consumer = () => {
  return (
    <>
      {/* Consumer 사이에 중괄호를 열어서 그안에 함수를 넣어 준다.
      컴포넌트의 children이 있어야 할 자리에 일반 JSX 또는 문자열이 아닌 함수를 전달 한다.
      이런 패턴을 Function as a child, 또는 Render Props라고 한다. */}
      <Step01Context.Consumer>{(value) => <div style={{ width: '64px', height: '64px', background: value.color }}></div>}</Step01Context.Consumer>
    </>
  );
};

export default Step01Consumer;

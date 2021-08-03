import React, { createContext, useState } from 'react';

// Context의 value에는 무조건 상태 값만 있어야 하는 것은 아니다. 함수를 전달해 줄 수도 있다.
const Step02Context = createContext({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

// Custom Provider 컴포넌트를 작성 한다.
// 기본 Provider를 렌더링 한다.
// Provider의 value에는 상태는 sate로, 업데이트 함수는 actions로 묶어서 전달 한다.
// Context에서 값을 동적으로 사용할 때 반드시 묶어 줄 필요는 없지만 state와 actions 객체를 따로
// 따로 분리해 주면 나중에 다른 컴포넌트에서 Context의 값을 사용할 때 편하다.
// createContext를 사용할 때 기본값으로 사용할 객체를 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋다.
const Step02Provider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return <Step02Context.Provider value={value}>{children}</Step02Context.Provider>;
};

const { Consumer: Step02Consumer } = Step02Context; // const ColorConsumer = Step02Context.Consumer
export { Step02Provider, Step02Consumer };

export default Step02Context;

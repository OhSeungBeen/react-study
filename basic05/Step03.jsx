// useContext Hook
// 리액트에 내장되어 있는 Hooks중에서 useContext라는 Hook을 사용하면
// 함수형 컴포넌트에서 Context를 편하게 사용 할 수 있다.

// static contextType
// 클래스형 컴포넌트에서 Context를 좀 더 쉽게 사용하려면 static contextType을 정의
// 하는 방법이 있다.

import React from 'react';
import Step03ColorBox from './Step03ColorBox';
import { Step03Provider } from './Step03Context';
import Step03SelectColor from './Step03SelectColor';

const Step03 = () => {
  return (
    <>
      <Step03Provider>
        <Step03ColorBox />
        <Step03SelectColor />
      </Step03Provider>
    </>
  );
};

export default Step03;

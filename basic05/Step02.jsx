// 동적 Context 사용하기
// Context의 값이 고정적인 값이 아닌 업데이트해야 하는 경우 사용한다.

import React from 'react';
import Step02ColorBox from './Step02ColorBox';
import { Step02Provider } from './Step02Context';
import Step02SelectColor from './Step02SelectColor';
const Step02 = () => {
  return (
    <>
      <Step02Provider>
        <Step02ColorBox />
        <Step02SelectColor />
      </Step02Provider>
    </>
  );
};

export default Step02;

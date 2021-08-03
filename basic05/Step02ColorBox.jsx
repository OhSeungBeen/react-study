// 동적 Context Consumer 사용 하기

import React from 'react';
import { Step02Consumer } from './Step02Context';

const Step02ColorBox = () => {
  return (
    <Step02Consumer>
      {({ state }) => (
        <>
          <div style={{ width: '64px', height: '64px', background: state.color }}></div>
          <div style={{ width: '64px', height: '64px', background: state.subColor }}></div>
        </>
      )}
    </Step02Consumer>
  );
};

export default Step02ColorBox;

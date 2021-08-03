// useContext Hook 사용

import React, { useContext } from 'react';
import Step03Context from './Step03Context';

const Step03ColorBox = () => {
  const { state } = useContext(Step03Context);
  return (
    <>
      <div style={{ width: '64px', height: '64px', background: state.color }}></div>
      <div style={{ width: '64px', height: '64px', background: state.subColor }}></div>
    </>
  );
};

export default Step03ColorBox;

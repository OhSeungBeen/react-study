// Component styleing
// Sass
// CSS 전처리기로 복잡한 작업을 쉽게 할 수있도록 해주고, 스타일 코드 재활용성을 높여 줄 뿐만 아니라
// 코드의 가독성을 높여서 유지 보수를 더욱 쉽게 해 준다.

import React from 'react';
import './Step02.scss';

const Step02 = () => {
  return (
    <>
      <div className="SassComponent">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box green"></div>
      </div>
    </>
  );
};

export default Step02;

// Hooks
// useRef
// 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 한다.

import React, { useState, useRef } from 'react';

const Step09 = () => {
  const [name, setName] = useState('');
  const inputEl = useRef(null);

  // 로컬 변수(렌더링과 상관없이 바뀔 수 있는 값)로 사용하기
  // ref 안의 값이 바뀌어도 컴포넌트가 렌덜이되지 않는다.
  // 렌더링과 관계없는 값을 관리할때 사용가능 하다.
  const id = useRef(1);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onClick = () => {
    // useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이
    // 실제 엘리먼트를 가르킵니다.
    inputEl.current.focus();
  };
  return (
    <>
      <input value={name} onChange={onChangeName} ref={inputEl} />
      <button onClick={onClick}>foucs</button>
    </>
  );
};

export default Step09;

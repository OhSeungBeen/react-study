// Hooks
// 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState
// 렌더링 직후 작업을 설정하는 useEffect등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던
// 다양한 작업을 할 수 있게 해 준다.

import React, { useState, useEffect } from 'react';

const Step05 = () => {
  // useState 함수는 하나의 상태 값만 관리한다.
  // state가 여러개라면 useState를 여러 번 사용하면 된다.
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  // useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.
  // 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보면된다.
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickname,
    });
  }, []); // 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트 될때는 실행하지 않으려면
  // 두 번째 파라미터로 비어 있는 배열을 넣어 주면 된다.

  // 특정 값이 업데이트될 때만 실행하고 싶을 때
  // 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다.
  useEffect(() => {
    console.log(name);
  }, [name]);

  // 컴포넌트가 언마운트되기 전이나 업데이트 직전에 어떠한 작업을 수행하고 싶을 때
  // 뒷정리(clenup) 함수를 반환해 주어야 한다.
  useEffect(() => {
    console.log('effect', name);
    return () => {
      console.log('clenup', name);
    };
  });

  // 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 두 번째 파라미터에 비어있는 배열을 넣으면 된다.
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
        <div>
          <p>name: {name}</p>
          <p>nickname: {nickname}</p>
        </div>
      </div>
    </>
  );
};

export default Step05;

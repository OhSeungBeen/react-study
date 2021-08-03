// history
// history 객체는 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props 중 하나로,
// 이 객체를 통해 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있다.
// 예를 들어 특정 버튼을 눌렀을 때 뒤로 가거나, 로그인 후 화면을 전환하거나, 다른 페이지로 이탈하는 것을 방지 한다.

import React, { useEffect, useRef } from 'react';

const Step03History = ({ history }) => {
  const onClickGoBack = () => {
    history.goBack(); // 뒤로 가기
  };

  const onClickGoHome = () => {
    history.push('/'); // 홈으로 이동
  };

  const unblock = useRef(null);

  useEffect(() => {
    unblock.current = history.block('정말 떠나실 건가요?'); // 페이지에 변화가 생기려고 할 때 나갈 것인지 질문

    return () => {
      if (unblock) {
        unblock.current(); // 컴포넌트가 unmount되면 질문을 멈춘다.
      }
    };
  }, []);

  return (
    <>
      <div>
        <button onClick={onClickGoBack}>뒤로</button>
        <button onClick={onClickGoHome}>홈으로</button>
      </div>
    </>
  );
};

export default Step03History;

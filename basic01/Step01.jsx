// JSX
// JSX는 자바스크립트의 확장 문법이다.
// 코드가 번들링되는 과정에서 바벨이 사용되어 일반 자바크립트 형태로 변환 된다.

import React from 'react';

const Step01 = () => {
  const react = 'react';
  const undefinedValue = undefined;
  return (
    <div>
      {/*컴포넌트에 여러 요소가 있따면 반드시 부모 요소 하나로 감싸야 한다.
        div를 사용하고 싶지 않으면 Fragmet(<>)를 사용할 수 있다.*/}
      Hello <b>React!</b>
      <p>리액트 안녕!</p>
      {/*JSX 안에서는 자바스크립트 표현식을 쓸 수 있다.
        JSX 내부에서 { } 감싸면 된다.*
        if문 대신 조건부 연산자를 사용하면 조건문을 사용할 수 있다.
        null을 렌더링하면 아무것도 보여 주지 않는다.*/}
      {react === 'react' ? <h1>react</h1> : null}
      {/*ADD 연산자(&&)를 사용한 조건부 렌더링
        && 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를
        렌더링 할때 null과 마찬가지로 아무것도 나타나지 않는다.*/}
      {react === 'react' && <h1>react</h1>}
      {/*undefined 렌더링 하지 않기
        어떤 값이 undefined일 수도 있다면, OR(||)연산자를 사용하여 오류를 방지할 수 있다.*/}
      {undefinedValue || 'undefined입니다.'}
      {/*인라인 스타일링
        DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어주어야한다.
        -문자를 없애고 카멜 표기법으로 작성해야 한다.*/}
      <div className="react" style={{ backgroundColor: 'black', color: 'aqua' }}>
        {react}
      </div>
    </div>
    // JSX를 여러 줄로 작성할 때 괄호로 감싸고, 한 줄로 표현할 수 있는 JSX는 감싸지 않는다.
  );
};

export default Step01;

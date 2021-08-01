// Component styleing
// 리액트에서 컴포넌트를 스타일링할 때는 다양한 방식을 사용할 수 있다.

// 자주 사용되는 방식
// 1.일반CSS: 컴포넌트를 스타일링하는 가장 기본 방식
// 2.Sass: 자주 사용되는 CSS 전처리기중 하나로 확장되 CSS문법을 사용하여 CSS코드를 더욱 쉽게 작성 할 수 있다.
// 3.CSS Module: 스타일을 작성할 때 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한
// 이름을 자동으로 생성해 주는 옵션
// 4.styled-components: 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스티일이
// 적용된 컴포넌트를 만들 수 있게 해준다.

// 일반 CSS 방식
// CSS를 작성할 때 가장 중요한 점은 CSS 클래스를 중복되지 않게 만드는 것이다.
// 이름을 지을 때 특별한 규칙을 사용하여 짓거나,
// 예) 컴포넌트 이름-클래스(Step01-이름)
// CSS Selector를 활용한다.
// 예) Step01 logo {
//      animation: App-logo-spin infinite 20s linear;
//     }

import React from 'react';
import logo from './logo.svg';
import './Step01.css';

const Step01 = () => {
  return (
    <>
      <div className="Step01">
        <header className="Step01-header">
          <img src={logo} className="Step01-logo" alt="logo" />
          <p>
            Edit <code>src/Step01.js</code> and save to relaod.
          </p>
          <a className="Step01-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Lear React
          </a>
        </header>
      </div>
    </>
  );
};

export default Step01;

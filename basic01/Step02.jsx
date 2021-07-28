// Component
// 컴포넌트의 기능은 단순한 템플릿 이상이다.
// 데이터가 주어졌을 때 이에 맞추어 UI만들어 주고 라이프 사이클 API를 이용하여
// 컴포넌트가 화면에 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리하고
// 임의 메서드를 만들어 특별한 기능을 붙여 줄 수 있다.

import React, { Component } from 'react';

// 클래스형 컴포넌트
class Step02 extends Component {
  render() {
    const react = 'react';
    return (
      <>
        <div>{react}</div>
      </>
    );
  }
}

// 함수형 컴포넌트
// function Step02() {
//   const react = 'react';
//   return (
//     <>
//       <div>{react}</div>
//     </>
//   );
// }

// 클래스형 컴포넌트와 함수형 컴포넌트의 차이점은
// 클래스형 컴포넌트의 경우 state기능 및 라이플 사이클 기능을
// 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다.
// 리액트 v16.8 이후 함수형 컴포넌트의 단점은 Hooks 기능이 도입되면서 해결되었다.
export default Step02;

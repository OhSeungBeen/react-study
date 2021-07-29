// ref(reference)
// 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법
// 리액트 컴포넌트 안에서 id를 사용할 수 있지만, 같은 컴포넌트를 여러 번 사용한다고 했을때
// HTML에서 DOM의 id는 유일해야 하는데, 중복 id를 DOM이 여러 개 생기니 잘못된 사용이다.
// ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 생기지 않는다.

// DOM을 꼭 사용해야 하는사황
// 특정 input에 포커스 주기, 스크롤 박스 조작하기, Canvas 요소에 그림 그리기 등
// 이때는 어쩔 수 없이 DOM에 직적적으로 접근해야하므로 ref를 사용한다.

import React, { Component } from 'react';

class Step02 extends Component {
  input;
  input2 = React.createRef();
  myComponent;

  handleClick = () => {
    this.input.focus();
  };

  handleClick2 = () => {
    this.input2.current.focus();
  };
  handleClick3 = () => {
    console.log(this.myComponent);
    this.myComponent.input.focus();
  };

  render() {
    return (
      <>
        {/* 1. 콜백 할수를 통한 ref 설정 */}
        <input
          ref={(ref) => {
            this.input = ref;
          }}
        />
        {/* // 2. createRef를 통한 ref 설정 */}
        <input ref={this.input2} />

        <button onClick={this.handleClick}>focus</button>
        <button onClick={this.handleClick2}>focus2</button>
        {/* 컴포넌트에 ref 달기
        컴포넌 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓴다.
        이렇게 하면 MyComponent 내부의 메서드 및 멤버 변수에도 접글할 수 있다. */}
        <MyComponent
          ref={(ref) => {
            this.myComponent = ref;
          }}
        />
        <button onClick={this.handleClick3}>focus3</button>
      </>
    );
  }
}

class MyComponent extends Component {
  input;
  render() {
    return (
      <>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
        />
      </>
    );
  }
}

export default Step02;

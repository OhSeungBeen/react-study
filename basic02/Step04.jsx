// LifeCycle
// 모든 리액트 컴포넌트에는 라이플사이클이 존재한다.
// 컴포넌트의 수명은 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝난다.
// 라이플 사이클은 마운트, 업데이트, 언마운트 카테고리로 나누어진다.
// -마운트 (컴포넌트 만든 후)
// 1.constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
// 2.getDriverdStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
// 3.render: 만든 UI를 렌더링하는 메서드
// 4.componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출되는 메서드
// -업데이트 (props, state가 바뀔 때, 부모 컴포넌트가 리렌더링될 때, this.forceUpdate로 강제로 렌더링을 트리거할 때)
// 1.getDrivedStateFromUpdate: props의 변화에 따라 state값에도 변화를 주고 싶을 때 사용
// 2.shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지 결정하는 메서드
// true를 반환하면 라이프사이클 메서드를 계속 실행하고 false를 반환하면 작업을 중지한다.
// 3.render: 컴포넌트를 리렌더링 한다.
// 4.getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 직전에 호출되는 메서드
// 5.componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출되는 메서드
// 언마운트 (컴포넌트가 제거될 때)
// 1.componentWillUnmout: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출되는 메서드

import React, { Component } from 'react';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class Step04 extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    console.log(getRandomColor());
    this.setState({ color: getRandomColor() });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <Step04SubComponent color={this.state.color} />
        </div>
      </>
    );
  }
}

class Step04SubComponent extends Component {
  state = {
    number: 0,
    color: null,
  };

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  myRef;

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', 'nextProps:', nextProps, 'nextState', nextState);
    // 테스트
    // 숫자의 마지막 자리가 4면 리렌더링을 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', 'prevState:', prevProps, 'prevState', prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상', 'snapshot:', snapshot);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnMout');
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  };
  render() {
    console.log('render');
    // render 메서드안에서 setState를 사용하면 안 되며, 브라우저 DOM에 접근해서도 안된다.
    // DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 한다.
    const style = {
      color: this.props.color,
    };
    return (
      <>
        <div>
          <h1 style={style} ref={(ref) => (this.myRef = ref)}>
            {this.state.number}
          </h1>
          <p>color: {this.state.color}</p>
          <button onClick={this.handleClick}>더하기</button>
        </div>
      </>
    );
  }
}

export default Step04;

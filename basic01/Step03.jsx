// props
// properties의 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다.
// props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// porps값을 컴포넌트 함수의 파라미터로 받아와서 사용한다.
const ChildComponent = (props) => {
  // 비구조 할당 문법을 사용하여 props값 추출
  const { name, children } = props;
  return (
    <>
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
      {/*children은 컴포넌트 태그 사이의 내용을 보여주는 props이다.*/}
      children 값은 {children}입니다.
    </>
  );
};

// 클래스형 컴포넌트에서 props
// class ChildComponent extends Component {
//   render() {
//     const { name, children } = this.props;
//     return (
//       <>
//         <div>안녕하세요, 제 이름은 {name}입니다.</div>
//         {/*children은 컴포넌트 태그 사이의 내용을 보여주는 props이다.*/}
//         children 값은 {children}입니다.
//       </>
//     );
//   }
// }

// defaultProps사용하여 props값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정할 수 있다.
ChildComponent.defaultProps = {
  name: 'defaultPropsName',
};

// propTypes를 사용하여 props를 검증 할 수 있다.
// array: 배열
// arrayOf(PropType): 특정 PropType으로 이루어진 배열
// bool: true, false
// func: 함수
// number: 숫자
// object: 객체
// string: 문자열
// symbol: ES6의 Symbol
// node: 렌더링할 수 있는 모든 것(숫자,문자열,JSX코드)
// instanceOf(클래스): 특정 클래스
// oneOf(['','']): 주어진 배열 요소 중 값 하나
// oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
// objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
// shape({name: PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체
// any: 아무 종류
ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

const Step03 = () => {
  return (
    <>
      {/*부모 컴포넌트에서 props 값을 지정한다.*/}
      <ChildComponent name="react">tag interval value</ChildComponent>
    </>
  );
};

export default Step03;

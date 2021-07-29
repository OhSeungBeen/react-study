// Event Handling
// DOM 요소들과 사용자가 웹브라우저에서 상호 작용

// React에서 이벤트를 사용할 때 주의사항
// 1.이벤트 이름은 카멜 표기법으로 작성한다. 예) onclick -> onClick
// 2.이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
// HTML에서 큰따옴표 안에 실행할 코드를 넣었지만, 리액트에서 할수의 형태의 객체를 전달한다.
// 3.DOM 요소에만 이벤트를 설정할 수 있다.
// 우리가 직접 만든 컨포넌트에는 이벤트를 자체적으로 설정할 수 없다.
// <MyComponent onClick={doSomthing} 예를 들어 MyComponent에 onClick값을 설정한다면 MyComponent를 클릭할때
// doSomething 함수를 실행하는 것이 아니라, 그냥 이름이 onClick인 props를 MyComponent에게 전달해 줄 뿐이다.

import React, { Component, useState } from 'react';

// 클래스형
// class Step01 extends Component {
//   state = {
//     message: '',
//   };

//   // 임의 메서드 만들기
//   // 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달해 주는 방식이 있지만,
//   // 함수를 미리준비하여 전달하는 방법도 있다. 성능상으로 차이가 거의없지만, 가독성은 훨씬 높다.
//   // 1.기본방식
//   // constructor(props) {
//   //   super(props);
//   //   // 함수가 호출될 때 this는 호출부에 따라결정되므로, 클래스의 임의 메서드가 특정 HTML요소의 이벤트로 등록되는
//   //   // 과정에서 메서드와 this의 관계가 끊어져 버린다. 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로
//   //   // 가르키기 위해서는 메서드를 this와 바인딩 하는 작업을 해주어야 한다.
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }
//   // handleChange(e) {
//   //   console.log(e, e.target.value);
//   //   this.setState({ message: e.target.value });
//   // }

//   // handleClick(e) {
//   //   alert(this.state.message);
//   //   this.setState({ message: '' });
//   // }
//   // 2.Property initializer Syntax를 사용한 방식
//   // 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 매서드 정의
//   handleChange = (e) => {
//     console.log(e, e.target.value);
//     this.setState({ message: e.target.value });
//   };

//   handleClick = (e) => {
//     alert(this.state.message);
//     this.setState({ message: '' });
//   };
//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요."
//           vlaue={this.state.message}
//           // e 객체는 SyntheticEvent로 웹브라우저의 네이티브 이벤트를 감싸는 객체이다.
//           // SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다.
//           // 만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.presist() 함수를 호출해 주어야 한다.
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// 함수형
const Step01 = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    console.log(e, e.target.value);
    setMessage(e.target.value);
  };
  const handleClick = () => {
    alert(message);
    setMessage('');
  };
  return (
    <>
      <input type="text" name="message" placeholder="아무거나 입력해 보세요." vlaue={message} onChange={handleChange} />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default Step01;

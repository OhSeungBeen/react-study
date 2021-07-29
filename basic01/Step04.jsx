// state
// state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
// 클래스형 컴포넌트가 가지고 있는 state와 함수형 컴포넌트에서 useState 함수를 통해 사용하는 state가 있다.

import React, { Component, useState } from 'react';

// 클래스형 state
// class Step04 extends Component {
//   // constructor(props) {
//   //   // 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component의 클래스가 지닌 생성자 함수를 호출해 준다.
//   //   super(props);
//   //   this.state = {
//   //     count: 0,
//   //   };
//   // }

//   // constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있다.
//   state = {
//     count: 1,
//   };
//   render() {
//     // this.state.count를 통해 state를 조회할 수 있다.
//     const { count } = this.state;
//     return (
//       <>
//         <h1>{count}</h1>
//         {/* setState 함수를 통해 state값을 바꿀 수 있다. */}
//         <button
//           onClick={() => {
//             // this.setState를 사용하여 state값을 업데이트할 때는 상태가 비동기적으로 업데이트 되기때문에
//             // this.setState를 두번 사용하는 것임에도 불구하고 버튼을 클릭할 때 숫자가 1씩 더해진다.
//             this.setState({ count: count + 1 });
//             this.setState({ count: count + 1 });
//             // 이에 대한 해결책을 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어 준다.
//             // prevState는 이전 state값이고 props는 현재 지니고 있는 props를 가리킨다.
//             this.setState(
//               (prevState, props) => {
//                 return {
//                   count: prevState.count + 1,
//                 };
//               },
//               // this.setState가 끝난 후 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백 함수를 등록한다.
//               () => {
//                 console.log('방금 setState가 호출되었습니다.');
//               }
//             );
//           }}
//         >
//           +1
//         </button>
//       </>
//     );
//   }
// }

// 함수형 state
const Step04 = () => {
  // 함수형 컴포넌트는 useState함수를 통해 state를 사용한다.
  // useState 함수의 인자에 초기값을 넣어준다.
  // 배열의 첫 번째 원소는 현재상태이고, 두번째 원소는 상태를 바꾸어 주는 함수(Setter)이다.
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);

          // 클래스형과 마찬가지로 함수형 state를 사용할 수 있다.
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        +1
      </button>
    </>
  );
};

// state를 사용할 때 주의 사항
// state의 값을 바꾸어야 할 때는 반드시 setState혹은 useState를 통해 전달받은 Setter 함수를 사용해야 한다.
// 배열이나 객체를 업데이트 할 경우에는 사본을 만들고 그 사본을 업데이트한 후 setState혹은 Setter 함수를 통해 업데이트한다.
// 객체에 대한 사본을 만들 때는 spread 연산자 ...을 사용하여 처리하고,
// 배열에 대한 사본을 만들때는 배열의 내장 함수를 이용한다.
// 예)
// 객체
// const object = { a:1, b:2, c:3 };
// const nextObject = {...object, b: 2 };
// 배열
// const array = [
//   { id: 1, value: true },
//   { id: 2, value: true },
//   { id: 3, value: false }
// ];
// let NextArry = array.concat({ id: 4 });
// nextArray.filter(item => item.id !== 2);
// nextArray.map(item=> item.id === 1 ? {...item, value: false } : item)

export default Step04;

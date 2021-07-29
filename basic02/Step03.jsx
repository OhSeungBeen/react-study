// map() function
// map 함수를 사용하여 컴포넌트를 렌더링 할 수 있습니다.
// map 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라
// 변환한 후 새로운 배열을 리턴합니다.

// arr.map(callback, [thisArg])
// callback: 새로운 배열의 요소를 생성하는 함수이고 파라미터는 세 가지이다.
// -currentValue: 현재 처리하고 있는 요소
// -index: 현재 처리하고 있는 요소의 index 값
// -arry: 현재 처리하고 있는 원본 배열
// thisArg(선택항목): callback 함수 내부에서 사용할 this 레퍼런스
import React, { Component } from 'react';

class Step03 extends Component {
  state = {
    colors: [{ id: 1, text: 'red' }],
    inputText: '',
    id: 2,
  };
  // 리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
  // key가 없으면 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.
  // key가 있다면 이값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다.
  // key값은 유일해야 한다. index값을 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다.
  onChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onClick = () => {
    this.setState({ inputText: '' });
    // 불변성 유지
    // 리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 한다.
    // 불변성을 유지해야 리액트 컴포넌트의 성능을 최적화할 수 있다.
    this.setState({ colors: [...this.state.colors, { id: this.state.id, text: this.state.inputText }] });
    this.setState((prevState) => {
      return {
        id: prevState.id + 1,
      };
    });
  };

  render() {
    const { colors, inputText } = this.state;
    const colorList = colors.map((color) => <li key={color.id}>{color.text}</li>);
    console.log(colorList);
    return (
      <>
        <input value={inputText} onChange={this.onChange} />
        <button onClick={this.onClick}>추가</button>
        <ul>{colorList}</ul>
      </>
    );
  }
}

export default Step03;

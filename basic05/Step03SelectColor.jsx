// static contextType 사용
import React, { Component } from 'react';
import Step03Context from './Step03Context';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class Step03SelectColor extends Component {
  // static contextType값을 지정 한다.
  static contextType = Step03Context;
  // this.context를 조회했을 때 현재 Context의 value를 가리키게 된다.
  // static contextType을 정의하면  클래스 메서드에서도 Context에 넣어 둔 함수를 호출할 수 있다.
  // 하지만 한 클래스에서 하나의 Context밖에 사용하지 못한다.
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
              onClick={() => {
                this.context.actions.setColor(color);
              }}
              onContextMenu={(e) => {
                e.preventDefault(); // 오른쪽 마우스 버튼 클릭 시 기본 메뉴가 뜨는 것 무시
                this.context.actions.setSubColor(color);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Step03SelectColor;

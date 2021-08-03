// Context에 저장된 함수 사용
import React from 'react';
import { Step02Consumer } from './Step02Context';

const colors = ['red', 'orange', 'yellow', 'green', 'bule', 'indigo', 'violet'];

const Step02SelectColor = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <Step02Consumer>
        {(value) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={() => {
                  value.actions.setColor(color);
                }}
                onContextMenu={(e) => {
                  e.preventDefault(); // 오른쪽 마우스 버튼 클릭 시 기본 메뉴가 뜨는 것 무시
                  value.actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </Step02Consumer>
    </div>
  );
};

export default Step02SelectColor;

// styled-components
// 자바스크립트 파일 안에 스타일을 선언하는 방식(CSS-in-JS라고 한다.)중에
// 개발자들이 가장 선호하는 라이브러리이다.

import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// 반응형 디자인
// 브라우저의 가로크기에 따라 다른 스타일을 적용하기 위해 일반 CSS를
// 사용할 때와 똑같이 media 쿼리를 사용한다.
// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// Tagged 템플릿 리터럴 문법을 통해 스타일을 넣어주면 해당 스타일이
// 적용된 태그로 이루어진 리액트 컴포넌트가 생성된다.
const Box = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있다. */
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;

  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능하다. */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  & + button {
    margin-left: 1rem;
  }

  /* props에 따른 조건부 스타일링
  inverted 값이 true 일 때 특정 스타일을 부여해준다.
  css를 사용하지 않고 바로 문자열을 넣어도 동작하기는 하지만
  해당 내용이 그저 문자열로만 취급되기 때문에 Tagged 템플릿 
  리터럴이 아니기 때문에 함수를 받아 사용하지 못해 해당 부분에서는
  props 값을 사용하지 못한다. props를 참조한다면, 반드시 css로
  감싸 주어서 Tagged 템플릿 리터럴을 사용해 주어야 한다.
  */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
`;

const Step04 = () => {
  return (
    <>
      <Box color="black">
        <Button>안녕하세요.</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
    </>
  );
};

export default Step04;

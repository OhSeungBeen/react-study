// SPA
// Single Page Application
// 한 개의 페이지로 이루어진 애플케이션이라는 의미이다.
// 전통적인 웹페이지에서는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고
// 페이지를 로딩할 때 마다 서버에서 리소스를 전달받아 해석한 뒤 화면에 보여주었다.
// 요즘에는 웹에서 제공되는 정보가 많기 때문에 새로운 화면을 보여 주어야 할 때마다 서버 측
// 에서 모든 뷰를 준비한다면 성능상의 문제가 발상핼 수 있다.

// 래액트 같은 라이브러리 또는 프레임워크를 사용하여 뷰 렌더링을 사용자 브라우저가 담당하도록 하고,
// 우선 애플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의 인터렉션이 발생하면 필요한
// 부분만 자바스크립트를 사용하여 업데이트해 준다.
// 싱글 페이지라고 해서 화면이 한 종류는 아니다. 페이지에서 로딩된 자바스크립트와 현재 사용자 브라우저의
// 주소 상태에 따라 다양한 화면을 보여 줄 수 있다. 다른 주소에 따라 다른 화면을 보여 주는 것을 라우팅 이라고 한다.
// 리액트 라우팅 라이브러리는 리액트 라우터, 리치 라우터, Next.js등 여러 가지가 있다.

// SPA 단점
// 1.앱의 규모가 커지면 자바스크립트 파일이 너무 커진다. 페이지 로딩 시 사용자가 실제로 방문하지 않을 수도 있는 페이지의
// 스크립트도 불러오기 때문인다. 코드 스플리팅을 이용하여 라우트별로 파일을 나누어 트래픽과 로딩 속도를 개선할 수 있다.
// 2.구글, 네이버, 다음과 같은 검색 엔진의 검색결과에 페이지가 나타나지 않을 수 있다. 서버 사이드 렌더링을 통해 해결해야
// 한다.
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Step01 from './Step01';
import Step02 from './Step02';
import Step03 from './Step03';
import Step04 from './Step04';
import Step05 from './Step05';

ReactDOM.render(
  // 라우터를 적용할때는 index파일에서 react-router-dom에 내장되어 있는 BrowserRouter 컴포넌트로 감싸면 된다.
  // BrowserRouter 컴포넌트를 이용하면 HTML5에 History API를 사용하여 페이지를 새로고침 하지 않고도 주소를 변경하고,
  // 현재 주소에 관련된 정보를  props로 쉽게 조회하거나 사용할 수 있도록 해 준다.
  <BrowserRouter>
    <Step05 />
  </BrowserRouter>,
  document.querySelector('#root')
);

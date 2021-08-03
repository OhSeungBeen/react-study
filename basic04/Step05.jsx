// Switch
// Switch 컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만 렌더링시켜 준다.
// 모든 규칙이 일치하지 않을 때 보여 줄 Not Found 페이지도 구현할 수 있다.

// NaveLink
// NavLink는 Link와 비슷하다. 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일
// 혹은 CSS 클래스를 적용할 수 있는 컴포넌트 이다.

import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Step01Home from './Step01Home';
import Step01About from './Step01About';

const Step05 = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };
  return (
    <>
      <ul>
        <li>
          {/* activeStyle 값을 props로 넣어주면 된다. */}
          <NavLink activeStyle={activeStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/about">
            About
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Step01Home} exact={true} />
        <Route path={['/about', '/info']} component={Step01About} />
        {/* path를 따로 정의하지 않으면 모든 상황에 렌더링 된다. */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default Step05;

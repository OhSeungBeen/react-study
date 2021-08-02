import React from 'react';
import { Route, Link } from 'react-router-dom';

import Step01Home from './Step01Home';
import Step01About from './Step01About';

// Route 컴포넌트를 사용하여 현재 경로에 따라 다른 컴포넌트를 보여 줄 수 있다.
// <Route path="주소" component={보여 줄 컴포넌트} />
const Step01 = () => {
  return (
    <>
      <div>
        {/* Link 컴포넌트는 클리갛며 다른 주소로 이동 시켜 주는 컴포넌트이다.
        일반 웹 애플리케이션에서 a 태그를 사용해서 전환하는데 리액트 라우터를 사용할 때는
        a 태그를 사용하면 안된다. 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에
        애플리케이션이 들고 있던 상태들을 모두 날리게 된다. 렌더링된 컴포넌들도 모두 사라지고
        다시 처음부터 렌더링 된다. 
        Link 컴포넌트 사용시 HTML5 History API를 사용하여 페이지의 주소만 변경 된다.
        페이지 전환 방지 기능이 내장
        */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        {/* /경로가 일치하므로 중복으로 두컴포넌트가 모두 나타난다. 
        exact props를 true로 설정하여 해결 가능하다.*/}
        <Route path="/" component={Step01Home} exact={true} />
        {/* Route 하나에 여러 개의 path 설정 */}
        <Route path={['/about', '/info']} component={Step01About} />

        {/* URL 파라미터와 쿼리
        페이지 주소를 정의할때 값을 전달해야될 때 사용한다.
        일반적으로 파라미터는 특정 아이디 이름을 조회할 때 사용하고, 쿼리는
        어떤 키워들 검색하거나 페이지에 필요한 옵션을 전달할 때 자주 사용된다 */}
      </div>
    </>
  );
};

export default Step01;

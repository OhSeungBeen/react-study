// URL 파라미터와 쿼리
// 페이지 주소를 정의할때 값을 전달해야될 때 사용한다.
// 일반적으로 파라미터는 특정 아이디 이름을 조회할 때 사용하고, 쿼리는
// 어떤 키워들 검색하거나 페이지에 필요한 옵션을 전달할 때 자주 사용된다.

import React from 'react';
import { Route } from 'react-router';

import Step02Url from './Step02Url';
import Step02Query from './Step02Query';

const Step02 = () => {
  return (
    <>
      <div>
        {/*path를 /path/:value로 설정하면 match.params.value값을 통해 값을 꺼낼 수 있다.*/}
        <Route path="/url/:username" component={Step02Url} />
        <Route path="/query" component={Step02Query} />
      </div>
    </>
  );
};

export default Step02;

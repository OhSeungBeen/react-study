import React from 'react';
import qs from 'qs';

const data = {
  ohseungbeen: {
    name: '오승빈',
    description: '리액트를 좋아하는 개발자',
  },
};

// 쿼리는 location 객체에 들어 있는 search값에서 조회 할 수 있다.
// location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며,
// 웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있다.

// qs 라이브러리를 사용하여 쿼리 문자열을 쉽게 객체 형태로 변환할 수 있다.
const Step02Query = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // QueryPrefix(?) 생략 옵션
  });
  // 쿼리를 사용할 때 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이다.
  const showDetail = query.detail === 'true';
  return (
    <>
      <div>{showDetail ? <p>detail is true</p> : <p>detail is not true</p>}</div>
    </>
  );
};

export default Step02Query;

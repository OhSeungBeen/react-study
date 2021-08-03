// withRouter
// withRouter 함수는 Hock(Higher-order Component)입니다.
// 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체를 접근 할 수 있게 해 준다.

import React from 'react';
import { withRouter } from 'react-router';

const Step04WithRouter = ({ location, match, history }) => {
  return (
    <>
      <div>
        {/* null, 2 들여 쓰기 적용 */}
        <div>
          <h4>location</h4>
          <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true} />
        </div>
        <div>
          <h4>match</h4>
          <textarea value={JSON.stringify(match, null, 2)} rows={7} readOnly={true} />
        </div>
        <div>
          <button onClick={() => history.push('/')}>Home</button>
        </div>
      </div>
    </>
  );
};

// 컴포넌트를 내보내 줄 때 함수로 감싸 준다.
export default withRouter(Step04WithRouter);

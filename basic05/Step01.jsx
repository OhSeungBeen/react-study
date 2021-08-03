// Context API
// Context API는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능이다.
// 예를들면 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등이 있다.
// 프로젝트 내에서 전역적으로 필요한 상태를 관리 할 때 최상위 컴포넌트인 App의 state에 넣어 관리한다.
// 자식의 자식의 자식... 컴포넌트에 App이 지니고 있는 값을 전달하려면 여러 컴포넌트를 거쳐야 한다.
// 이런 방식으로 사용하면 유지 보수성이 낮아 진다. 그렇기 때문에 리덕스나 MobX 같은 상태 관리 라이브러리를
// 사용하여 전역 상태 관리 작업을 처리 한다. Context API를 사용하면 Context를 만들어 단 한 번에 원하는 값을
// 받아와 사용 할 수 있다.

import React from 'react';
import Step01Consumer from './Step01Consumer';
import Step01Context from './Step01Context';

const Step01 = () => {
  return (
    <>
      {/* Provider를 사용하면 Context의 값을 변경 할 수 있다.
      value를 명시하지 않으면 오류가 발생한다. */}
      <Step01Context.Provider value={{ color: 'red' }}>
        <div>
          <Step01Consumer />
        </div>
      </Step01Context.Provider>
    </>
  );
};

export default Step01;

// 새 Context를 만들 때는 createContext 함수를 사용 한다.
import { createContext } from 'react';

const Step01Context = createContext({ color: 'black' });

export default Step01Context;

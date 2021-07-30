// Hooks
// useCallback
// 주로 렌더링 성능을 최적화해야 하는 상황에서 사용한다.
// 이 Hook을 사용하면 만들어 놨던 함수를 재사용할 수 있다.

function getAverage(numbers) {
  console.log('getAverage()');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
}

import React, { useState, useMemo, useCallback } from 'react';

const Step08 = () => {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState([]);

  // onChangeNumber함수와 onClickAddNumber 함수는 컴포넌트가 리렌더링될 때마다 새로 만들어진 함수를 사용하게된다.
  // 컴포넌트의 렌더링이 자주발생하거나 렌더링해야 할 컴포넌의 개수가 많아지면 이부분을 최적화해 주는 것이 좋다.
  // 첫 번째 파라미터에는 생성하고 싶은 함수, 두 번째 파라미터에는 배열을 넣으면된다. 이 배열에는 어떤 값이 바뀌었을 때
  // 함수를 새로 생성해야 하는지 명시해야 한다.
  // 예를 들어 onChangeNumber의 경우 기존의 값을 조회하지 않고 바로 설정만 하기 때문에 배열이 비어 있어도 상관없지만
  // onClickAddNumber는 기존의 number와 numbers를 조회해서 newNumbers를 생성하기 때문에 배열안에 number와 numbers를 꼭 넣어야 한다.
  const onChangeNubmer = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  const onClickAddNumber = useCallback(() => {
    const newNumbers = [...numbers, parseInt(number)];
    setNumbers(newNumbers);
    setNumber('');
  }, [number, numbers]);

  const avg = useMemo(() => getAverage(numbers), [numbers]);

  return (
    <>
      <div>
        <input value={number} onChange={onChangeNubmer} />
        <button onClick={onClickAddNumber}>등록</button>
      </div>
      <div>
        <ul>
          {numbers.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <div>평균값: {avg}</div>
    </>
  );
};

export default Step08;

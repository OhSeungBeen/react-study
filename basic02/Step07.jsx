// Hooks
// useMemo
// useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.

function getAverage(numbers) {
  console.log('getAverage()');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
}

import React, { useState, useMemo } from 'react';

const Step07 = () => {
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState([]);

  const onChangeNubmer = (e) => {
    setNumber(e.target.value);
  };

  const onClickAddNumber = () => {
    const newNumbers = [...numbers, parseInt(number)];
    setNumbers(newNumbers);
    setNumber('');
  };

  // useMemo를 사용하여 numbers에 값이 바뀌지 않았다면 이전에 결과를 사용하도록 만든다.
  // numbers에 내용이 바뀔 때만 getAverage 함수가 호출된다.
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
      {/* 숫자를 등록할 때문만 아니라 인풋 내용이 수정될 때도 getAverage 함수가 호출되는 것을 확인할 수 있다.
      렌더링할 때마다 이 함수를 실행할 필요가 없다.
      useMemo를 사용하면 이러한 작업을 최적화 할 수 있다.
      <div>평균값: {getAverage(numbers)}</div> */}
      <div>평균값: {avg}</div>
    </>
  );
};

export default Step07;

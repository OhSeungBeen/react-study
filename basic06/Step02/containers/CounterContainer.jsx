// 컨테이너 컴포넌트
// 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아 온다
// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 한다.

// 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 한다.
// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위한 설정 함수이고,
// mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수이다.

// connect 함수를 호출하고 나면 또 다른 함수가 반환된다. 반환된 함수에 컴포넌트를 파라미터로 넣어주면
// 리덕스와 연동된 컴포넌트가 만들어진다.

import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => {
  // 액션 함수가 많아진다면 컴포넌트에서 액션을 디스패치하기 위해 각 액션 생성 함수를 호출하고
  // dispatch로 감싸는 작업이 조금 번거로울 수 있다. 리덕스에서 제공하는 bindActionCreators 유틸 함수를 사용하자.
  // 방법1.
  // return {
  //   increase: () => {
  //     console.log('increase');
  //     return dispatch(increase());
  //   },
  //   decrease: () => {
  //     console.log('decrease');
  //     return dispatch(decrease());
  //   },
  // };
  // 방법2.
  //return bindActionCreators({ increase, decrease }, dispatch);
  // 방법3.
  // 더편한 방법은 바로 mapDispatchToprops에 해당하는 파라미터 함수 형태가 아닌 액션 생성 함수로 이루어진 객체형태로
  // 넣어 준다. connect 함수가 내부적으로 bindActionCreator작업을 대신해 준다.
};
// connect 함수를 사용할 때는 일반적으로 mapStateToProps,mapDispatchToProps를
// 미리 선언해 놓고 사용한다. connect 함수 내부에 익명 함수로 선언해도 문제가 되지는 않는다.
export default connect(mapStateToProps, { increase, decrease } /*mapDispatchToProps*/)(CounterContainer);

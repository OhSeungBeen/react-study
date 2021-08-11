// logger middleware
const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조
  // store는 리덕스 스토어 인스턴스, action은 디스패치된 액션을 가리킨다.
  // next는 함수형태이며 store.dispatch와 비슷한 역할을 한다.
  // next(action)을 호출하면 그다음 처리해야 할 미들웨어에게 액션을 넘겨주고,
  // 만약 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.
  // next를 사용하지 않으면 액션이 리듀서에게 전달되지 않는다.
  console.log(action, action.type);
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 또는 리듀서에게 전달
  console.log('다음 상태', store.getState());
};

export default loggerMiddleware;

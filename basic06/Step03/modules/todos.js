// redux-ation 적용하기

import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });
// let id = 3;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// creatAction으로 액션을 만들면 액션에 필요한 추가데이터는 payload라는 이름을 사용한다.
// 액션 생성 예)
// const MY_ACTION = 'sample/MY_ACTION;
// const myAction = createAction(MY_ACTION);
// const action = myAction('hello');
// 액션 생성 결과)
// { type: MY_ACTION, payload: 'hello' }
// payload에 넣는 것이 아니라 변형을 주어서 넣고 싶다면,
// creatAction의 두 번째 함수에 payload를 정의하는 함수를 넣어 주면 된다.

// text => text, id => id와 같은 형태로 파라미터를 그대로 반환하는 함수를 넣었다.
// 이작업은 필수가 아니지만 코드를 보았을 때 이 액션 생성 함수의 파라미터로 어떤 값이 필요한지
// 쉽게 파악할 수 있다.
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 3;
export const insert = createAction(INSERT, (text) => ({ id: id++, text, done: false }));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: [...state.todos, action.todo], // todos: state.todos.concat(action.todo)
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// createAction으로 만든 액션 생성 함수는 파라미터로 받아 온 값을 객체 안에 넣으 때 원하는 이름으로
// 넣는 것이 아니라 action.id, action.todo와 같이 action.payload라는 이름을 공통적으로 넣어 줘야 된다.
const todos = handleActions(
  {
    // 객체 비구조화 할당 문법으로 action 값의 payload 이름을 새로 설정 해주면 정확한 어떤 값을 의미하는지
    // 더 쉽게 파악 할 수 있다.
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input: input }),
    [INSERT]: (state, { payload: todo }) => ({ ...state, todos: [...state.todos, todo] }),
    [TOGGLE]: (state, { payload: id }) => ({ ...state, todos: state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)) }),
    [REMOVE]: (state, { payload: id }) => ({ ...state, todos: state.todos.filter((todo) => todo.id !== id) }),
  },
  initialState
);
export default todos;

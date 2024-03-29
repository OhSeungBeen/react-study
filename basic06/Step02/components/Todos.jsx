import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true} />
      <span> {todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSumbit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <>
      <div>
        <form onSubmit={onSumbit}>
          <input value={input} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
      </div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </>
  );
};

export default Todos;

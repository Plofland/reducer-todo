import React from 'react';

export default function Todo(props) {
  const { todo } = props;
  return (
    <div>
      <li className={todo.completed ? 'completed' : ''}>{todo.title}</li>;
    </div>
  );
}

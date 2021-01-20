import React from 'react';

export default function Todo(props) {
  const { todo, handleToggleCompleted } = props;

  const handleClick = () => {
    handleToggleCompleted(todo.id);
  };
  return (
    <div>
      <li onClick={handleClick} className={todo.completed ? 'completed' : ''}>
        {todo.title}
      </li>
      ;
    </div>
  );
}

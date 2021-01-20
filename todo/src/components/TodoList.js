import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  const { handleToggleCompleted, handleClearCompleted } = props;
  return (
    <div className="listContainer">
      <h3>List of items</h3>
      <ul>
        {props.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              handleToggleCompleted={handleToggleCompleted}
              handleClearCompleted={handleClearCompleted}
            />
          );
        })}
      </ul>
    </div>
  );
}

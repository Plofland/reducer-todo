import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <div className="listContainer">
      <h3>List of items</h3>
      {props.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

import React from 'react';

export default function TodoList(props) {
  return (
    <div className="listContainer">
      <h3>List of items</h3>
      {props.todos.map((todo) => {
        return 
          <Todo key={todo.id} todo={todo}>
        })
      }
    </div> 
  );
}

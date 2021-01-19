import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { useReducer } from 'react';
import reducer, { initialState } from './reducer/index';
import { addTodo } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    dispatch(addTodo('title'));
  };

  return (
    <div>
      <h1>Todo App</h1>
      {/* <button onClick={handleClick}>test button</button> */}
      <TodoList props={state.todos} />
      <TodoForm handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { useReducer } from 'react';
import reducer, { initialState } from './reducer/index';
import { addTodo, clearCompleted, toggleCompleted } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    dispatch(addTodo('title'));
  };

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(0));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleClearCompleted}>test button</button>
      <TodoList
        props={state.todos}
        handleToggleCompleted={handleToggleCompleted}
      />
      <TodoForm handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;

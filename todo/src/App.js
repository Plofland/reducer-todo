import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { useReducer } from 'react';
import reducer, { initialState } from './reducer/index';
import { addTodo, clearCompleted, toggleCompleted } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  };

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted);
  };

  console.log(state.todos);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <button onClick={handleClearCompleted}>test button</button>
      <TodoList
        todos={state.todos}
        handleToggleCompleted={handleToggleCompleted}
        handleClearCompleted={handleClearCompleted}
      />
      <TodoForm handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;

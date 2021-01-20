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
    dispatch(clearCompleted());
  };

  console.log(state.todos);
  return (
    <div className="App">
      <h1>Uninspired Todo App</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <TodoList
        todos={state.todos}
        handleToggleCompleted={handleToggleCompleted}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
}

export default App;

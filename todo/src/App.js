import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const todos = [
    {
      title: todo1,
      id: 0,
      completed: false
    },
    {
      title: todo2,
      id: 1,
      completed: false
    },
    {
      title: todo3,
      id: 2,
      completed: false
    }
  ];
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList props={todos} />
      <TodoForm />
    </div>
  );
}

export default App;

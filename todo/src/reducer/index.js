export const initialState = {
  todos: [
    {
      title: 'This task is done',
      id: 0,
      completed: true
    },
    {
      title: 'Click Task to Cross Off',
      id: 1,
      completed: false
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: state.todos.length,
        completed: false,
        title: action.payload
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case 'TOGGLE_COMPLETED':
      //1. map through each todo
      //2. if todo has the id we are looking (in the action.payload), return a copy of the item with completed flipped
      //3. if todo does not have id we are looking for, return the item as is
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return !todo.completed;
        })
      };
    default:
      return state;
  }
};

export default reducer;

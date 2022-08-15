import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL_TODO,
  UPDATE_TODO,
} from "./constants";

//todo: Biến nhớ ( Lưu trữ ) todoList
const storageTodos = JSON.parse(localStorage.getItem("todos"));

const initState = {
  todoInput: "",
  todos: storageTodos ?? [],
};

function reducer(state, action) {
  let newState;

  switch (action.type) {
    //todo: Actions ...
    case SET_TODO_INPUT:
      newState = {
        ...state,
        todoInput: action.playload,
      };
      break;
    case ADD_TODO:
      newState = {
        ...state,
        todos: [...state.todos, action.playload],
      };
      break;
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.playload, 1);

      newState = {
        ...state,
        todos: newTodos,
      };
      break;
    case CLEAR_ALL_TODO:
      const clearAll = [...state.todos];
      clearAll.splice(0, clearAll.length);

      newState = {
        ...state,
        todos: clearAll,
      };
      break;
    case UPDATE_TODO:
      const newTodo = [...state.todos];
      newTodo.splice(action.index, 1, action.todo);

      newState = {
        ...state,
        todos: newTodo,
      };
      break;
    default:
      throw new Error("Invalid action.");
  }

  //todo: Save data to localStorage
  const jsonTodos = JSON.stringify(newState.todos);
  localStorage.setItem("todos", jsonTodos);

  return newState;
}

export { initState };
export default reducer;

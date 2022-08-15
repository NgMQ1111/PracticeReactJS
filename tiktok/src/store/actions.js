import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL_TODO,
  UPDATE_TODO,
} from "./constants";

export const setTodoInput = (playload) => ({
  type: SET_TODO_INPUT,
  playload,
});

export const addTodo = (playload) => ({
  type: ADD_TODO,
  playload,
});

export const deleteTodo = (playload) => ({
  type: DELETE_TODO,
  playload,
});

export const clearAllTodo = (playload) => ({
  type: CLEAR_ALL_TODO,
  playload,
});

export const updateTodo = (todo, index) => ({
  type: UPDATE_TODO,
  todo,
  index,
});

import { todoList } from '../state.js';

export const saveToLocalStorage = (key = "todos") => {
  localStorage.setItem(key, JSON.stringify(todoList));
};
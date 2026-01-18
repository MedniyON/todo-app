import { todoList } from "./state.js";
import { saveToLocalStorage } from "./helpers/local-storage.js";
import { render } from "./helpers/render.js";

const input = document.querySelector("[data-text-field]");
const addTodoBtn = document.querySelector("[data-add-todo-btn]");

const addTodoFn = () => {
  if (!input.value.trim()) return;

  todoList.push(input.value);
  input.value = "";

  saveToLocalStorage();
  render();
};

export const removeTodo = (index) => {
  todoList.splice(index, 1);
  saveToLocalStorage();
  render();
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodoFn();
});

addTodoBtn.addEventListener("click", addTodoFn);

render();

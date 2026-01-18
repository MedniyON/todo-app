import { todoList } from "../state.js";
import { createElement } from './dom.js'
import {removeTodo} from '../script.js'

const container = document.querySelector("[data-todo-container]");


export const render = () => {
  container.innerHTML = "";
  todoList.forEach((todo, idx) => {
    const todoElement = createElement("div", todo);
    const removeBtn = createElement("button", "❌");

    removeBtn.addEventListener("click", () => removeTodo(idx));

    removeBtn.classList.add("remove-btn");
    todoElement.classList.add("todo-item");
    todoElement.append(removeBtn);
    container.append(todoElement);
  });
};
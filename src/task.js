import { add } from "lodash";
import loadProjectForm from ".";
import addToDo from "./todo";

function addTask() {
    const warning = document.getElementById('warning');
    warning.display = 'none';

    const task_container = document.createElement('div');
    task_container.classList.add('task-container');
    const task = document.createElement('div');
    task.classList.add('task');
    const name = document.getElementById('input-form');
    name.name = 'name';

    
    if (!name.value) {
        warning.display = 'flex';
        return;
    }
    
    task.innerHTML = name.value;
    const task_window = document.getElementById('task-window');
    const dropdown_btn = document.createElement('button');
    const todos = document.createElement('div');
    todos.classList.add('dropdown-menu');
    const todo_btn = document.createElement('button');
    todo_btn.classList.add('submit-btn');
    todo_btn.innerHTML = "Add To-Do";
    todo_btn.onclick = function (e) {
        if (input_todo.className == 'input-todo-show') {
            input_todo.className = 'input-todo';
        } else {
            input_todo.className = 'input-todo-show';
        }
    }
    
    const input_todo = document.createElement('div');
    input_todo.classList.add('input-todo');
    const text_field = document.createElement('input');
    text_field.classList.add('input-form');
    const input_todo_btn = document.createElement('button');
    input_todo_btn.classList.add('submit-btn');
    input_todo_btn.innerHTML = 'Submit';
    text_field.placeholder = 'Add To-Do Name';
    input_todo.appendChild(text_field);
    input_todo.appendChild(input_todo_btn);

    input_todo_btn.onclick = function (e) {
        const data = addToDo(text_field.value);
        todo_container.appendChild(data);
        text_field.value = '';
        todo_btn.onclick();
    }

    dropdown_btn.innerHTML = 'v';
    dropdown_btn.classList.add('dropdown-btn');
    const delete_btn = document.createElement('button');
    delete_btn.innerHTML = 'X';
    delete_btn.classList.add('delete-btn');
    dropdown_btn.onclick = function (e) {
        if (dropdown_btn.innerHTML == 'v') {
            dropdown_btn.innerHTML = '^';
            task.className = 'task-open';
            todos.className = 'dropdown-menu-open';
        } else {
            dropdown_btn.innerHTML = 'v';
            task.className = 'task';
            todos.className = 'dropdown-menu';
        }
    }

    delete_btn.onclick = function (e) {
        const element = e.target.parentNode;
        const parent_element = element.parentNode;
        element.remove();
        parent_element.remove();
    }

    const todo_container = document.createElement('div');
    todo_container.classList.add('todo-container');

    todos.appendChild(todo_container);
    todos.appendChild(todo_btn);
    todos.appendChild(input_todo);
    task.appendChild(dropdown_btn);
    task.appendChild(delete_btn);
    task_container.appendChild(task);
    task_container.appendChild(todos);
    task_window.appendChild(task_container);
    name.value = '';

    loadProjectForm();
    
}

export default addTask;
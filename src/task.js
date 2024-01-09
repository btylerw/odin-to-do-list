import { add } from "lodash";
import loadProjectForm from ".";

function addTask() {
    const warning = document.getElementById('warning');
    warning.display = 'none';
    const task_container = document.createElement('div');
    task_container.classList.add('task-container');
    const task = document.createElement('div');
    task.classList.add('task');
    const name = document.getElementById('input-form');
    if (!name.value) {
        warning.display = 'flex';
        return;
    }
    task.innerHTML = name.value;
    const task_window = document.getElementById('task-window');
    const dropdown_btn = document.createElement('button');
    const todos = document.createElement('div');
    todos.innerHTML = 'Test Content';
    todos.classList.add('dropdown-menu');
    dropdown_btn.innerHTML = 'v';
    dropdown_btn.classList.add('dropdown-btn');
    dropdown_btn.onclick = function (e) {
        if (dropdown_btn.innerHTML == 'v') {
            dropdown_btn.innerHTML = '^';
            todos.className = 'dropdown-menu-open';
        } else {
            dropdown_btn.innerHTML = 'v';
            todos.className = 'dropdown-menu';
        }
    }
    task.appendChild(dropdown_btn)
    task_container.appendChild(task);
    task_container.appendChild(todos);
    task_window.appendChild(task_container);
    name.value = '';

    loadProjectForm();
    
}

export default addTask;
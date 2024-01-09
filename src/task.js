import { add } from "lodash";
import loadProjectForm from ".";

function addTask() {
    const warning = document.getElementById('warning');
    warning.display = 'none';
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
    dropdown_btn.innerHTML = 'V';
    dropdown_btn.classList.add('dropdown-btn');
    task.appendChild(dropdown_btn)
    task_window.appendChild(task);
    name.value = '';

    loadProjectForm();
    
}

export default addTask;
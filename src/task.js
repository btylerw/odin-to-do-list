import { add } from "lodash";
import loadProjectForm from ".";

function addTask() {
    const task = document.createElement('div');
    task.classList.add('task');
    const name = document.getElementById('input-form');
    task.innerHTML = name.value;
    const task_window = document.getElementById('task-window');
    task_window.appendChild(task);
    name.value = '';

    loadProjectForm();
    
}

export default addTask;
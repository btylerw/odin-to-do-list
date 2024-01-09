import _ from 'lodash';
import './style.css';
import loadUI from './ui';
import addTask from './task';

document.body.appendChild(loadUI());
const newBtn = document.getElementById('new-btn');
newBtn.addEventListener('click', loadProjectForm);
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', addTask);

function loadProjectForm() {
    const proj = document.getElementById('project-container');
    if (proj.style.display == 'flex') {
        proj.style.display = 'none';
    } else {
        proj.style.display = 'flex';
    }
}

export default loadProjectForm;
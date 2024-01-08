import _ from 'lodash';
import './style.css';
import loadUI from './ui';

document.body.appendChild(loadUI());
const newBtn = document.getElementById('new-btn');
newBtn.addEventListener('click', loadProjectForm);

function loadProjectForm() {
    const proj = document.getElementById('project-form');
    if (proj.style.display == 'flex') {
        proj.style.display = 'none';
    } else {
        proj.style.display = 'flex';
    }
}
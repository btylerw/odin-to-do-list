import './style.css';

function loadUI() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = 'To-Do-List';
    return container;
}

export  default loadUI;
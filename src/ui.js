

function loadUI() {
    const container = document.createElement('div');
    container.classList.add('container');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = 'To - Do - List';

    const new_project = document.createElement('button');
    new_project.setAttribute('id', 'new-btn')
    new_project.innerHTML = '+ New';

    const project_form = document.createElement('div');
    project_form.classList.add('project-form');
    project_form.setAttribute('id', 'project-form');
    const name = document.createElement('input');
    name.setAttribute('id', 'input-form');
    name.classList.add('input-form');
    name.placeholder = 'Project Name';
    const submit_btn = document.createElement('button');
    submit_btn.setAttribute('id', 'submit-btn');
    submit_btn.innerHTML = 'Add';
    project_form.appendChild(name);
    project_form.appendChild(submit_btn);

    const task_window = document.createElement('div');
    task_window.setAttribute('id', 'task-window');
    task_window.classList.add('task-window');

    sidebar.append(new_project);
    sidebar.append(project_form);
    container.appendChild(sidebar);
    container.appendChild(task_window);
    return container;
}

export  default loadUI;
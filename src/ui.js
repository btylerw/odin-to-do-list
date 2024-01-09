function loadUI() {
    const container = document.createElement('div');
    container.classList.add('container');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = 'To - Do - List';

    const new_project = document.createElement('button');
    new_project.setAttribute('id', 'new-btn');
    new_project.classList.add('new-btn');
    new_project.innerHTML = '+ New';

    const project_container = document.createElement('div');
    project_container.classList.add('project-container');
    project_container.setAttribute('id', 'project-container');
    const project_form = document.createElement('form');
    project_form.classList.add('project-form');
    const name = document.createElement('input');
    name.setAttribute('id', 'input-form');
    name.classList.add('input-form');
    name.placeholder = 'Project Name';
    name.type = 'text';
    name.required = true;
    const submit_btn = document.createElement('button');
    submit_btn.setAttribute('id', 'submit-btn');
    submit_btn.classList.add('submit-btn');
    submit_btn.type = 'submit';
    submit_btn.innerHTML = 'Add';
    const warning = document.createElement('div');
    warning.setAttribute('id', 'warning');
    warning.classList.add('warning');
    warning.innerHTML = 'Field is Required';
    project_form.appendChild(name);
    project_form.appendChild(warning);
    project_form.appendChild(submit_btn);
    project_container.appendChild(project_form);

    const task_window = document.createElement('div');
    task_window.setAttribute('id', 'task-window');
    task_window.classList.add('task-window');

    sidebar.append(new_project);
    sidebar.append(project_container);
    container.appendChild(sidebar);
    container.appendChild(task_window);
    return container;
}

export  default loadUI;
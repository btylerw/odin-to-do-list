

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
    name.placeholder = 'Project Name';
    project_form.appendChild(name);

    sidebar.append(new_project);
    sidebar.append(project_form);
    container.appendChild(sidebar);
    return container;
}

export  default loadUI;
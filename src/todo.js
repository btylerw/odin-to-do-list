function addToDo(name) {
    const todo = document.createElement('div');
    todo.classList.add('checklist');
    const check = document.createElement('input');
    check.type = 'checkbox';
    const text = document.createElement('div');
    text.innerHTML = name;
    todo.appendChild(check);
    todo.appendChild(text);
    return todo;
}

export default addToDo
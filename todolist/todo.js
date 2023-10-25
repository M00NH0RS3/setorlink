const list_el = document.getElementById('list');
const create_btn_el = document.getElementById('create');

let todos = [];

create_btn_el.addEventListener('click', CreateNewTodo);
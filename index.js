var listElement = document.querySelector('#toDo ul');
var inputElement = document.querySelector('#toDo input');
var buttonElement = document.querySelector('#toDo button');

var listTodo = JSON.parse(localStorage.getItem('list_toDo')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for (todo of listTodo) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var pos = listTodo.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo('+pos+')')
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        listElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
        //console.log(todo);
    }
}


renderTodos();

function addToDo() {
    var toDoText = inputElement.value;

    listTodo.push(toDoText);
    inputElement.value = '';
    renderTodos();
    save();
}
buttonElement.onclick = addToDo;

function deleteToDo(pos) {
    listTodo.splice(pos,1);
    renderTodos();
    save();
}

function save() {

    localStorage.setItem('list_toDo', JSON.stringify(listTodo));
}
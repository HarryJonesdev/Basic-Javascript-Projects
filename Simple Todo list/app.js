/*
Simple Todo List app
*/

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function addToDoItem() {
    var toDo = document.createElement('p');
    
    toDo.innerText = inputField.value;
    toDoContainer.appendChild(toDo);
    inputField.value="";
    inputField.focus();

    toDo.addEventListener('click', function() {
        toDo.style.textDecoration = "line-through";

    })

    toDo.addEventListener('dblclick', function() {
        toDoContainer.removeChild(toDo);


    })

}


addToDoButton.addEventListener('click', addToDoItem);

document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
        addToDoItem();

    }
})




